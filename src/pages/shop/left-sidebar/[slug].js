import Link from "next/link";
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Paginator from "react-hooks-paginator";
import { connect } from "react-redux";
// import { SlideDown } from "react-slidedown";
import { useToasts } from "react-toast-notifications";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { LayoutTwo } from "../../../components/Layout";
import { ShopHeader, ShopProducts, ShopSidebar } from "../../../components/Shop";
import { getSortedProducts } from "../../../lib/product";
import { getCollections } from "../../../redux/actions/navigationActions";
import { getProductsList } from "../../../redux/actions/productListActions";

const LeftSidebar = ({ products }) => {
	const router = useRouter();
	const { addToast } = useToasts();

	const [apiProducts, setApiProducts] = useState([])
	const [apiFilteredProducts, setApiFilteredProducts] = useState([])
	const [collections, setCollections] = useState('')

	const [layout, setLayout] = useState("grid four-column");
	const [sortType, setSortType] = useState("");
	const [sortValue, setSortValue] = useState('all');
	const [filterSortType, setFilterSortType] = useState("");
	const [filterSortValue, setFilterSortValue] = useState("");
	const [offset, setOffset] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [currentData, setCurrentData] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
	const [totalLength, setTotalLength] = useState(0);

	const pageLimit = 24;

	const getLayout = (layout) => {
		setLayout(layout);
	};

	const getSortParams = (type, value) => {
		setSortType(type);
		setSortValue(value);
	};

	const getFilterSortParams = (sortType, sortValue) => {
		setFilterSortType(sortType);
		setFilterSortValue(sortValue);
	};

	const getPageProducts = () => {
		return apiFilteredProducts.slice(offset, offset + pageLimit)
	}

	useEffect(() => {
		let sortedProducts = getSortedProducts(apiProducts, sortType, sortValue);
		const filterSortedProducts = getSortedProducts(
			sortedProducts,
			filterSortType,
			filterSortValue
		);
		sortedProducts = filterSortedProducts;
		setSortedProducts(sortedProducts);
		setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
	}, [offset, apiProducts, filterSortType, filterSortValue]);

	useEffect(async () => {
		console.log("STATRT")
		const collectionArray = JSON.parse(localStorage.getItem("navCollection"))
		const response = await getProductsList(collectionArray);
		if (response.data.errorText === 'accessToken expired' || localStorage.getItem('accessToken') === undefined) {
			addToast("Access Token expired, please log in again!", { appearance: "error", autoDismiss: true });
			Router.push('/other/login');
		} else {
			const aaa = response.data.items ? response.data.items.filter((item, i) => item.picture !== undefined) : '';
			setApiProducts(response.data.items)
		}
	}, [products, localStorage.getItem('navCollection')])

	useEffect(async () => {
		console.log("SIDEEFFECT", sortValue)
		let filtered = [];

		if (sortValue === "all" && !JSON.parse(localStorage.getItem('navCollection'))) {
			const response = await getProductsList();
			if (response.data.errorText === 'accessToken expired' || localStorage.getItem('accessToken') === undefined) {
				addToast("Access Token expired, please log in again!", { appearance: "error", autoDismiss: true });
				Router.push('/other/login');
			} else {
				const aaa = response.data.items ? response.data.items.filter((item, i) => item.picture !== undefined) : '';
				setApiProducts(response.data.items)
			}
		} else {

			let fabricId = "";

			if (collections) {
				collections.map((col, i) => {
					col.fabrics.map((item, i) => {
						if (item.name === sortValue) {
							fabricId = item.id
						}
					})
				})
				const filterArray = {
					fabricId: fabricId
				}
				const response = await getProductsList(filterArray);
				if (response.data.errorText === 'accessToken expired' || localStorage.getItem('accessToken') === undefined) {
					addToast("Access Token expired, please log in again!", { appearance: "error", autoDismiss: true });
					Router.push('/other/login');
				} else {
					const aaa = response.data.items ? response.data.items.filter((item, i) => item.picture !== undefined) : '';
					setApiProducts(response.data.items)
				}
			}
		}

		setTotalLength(filtered.length);
		setApiFilteredProducts(filtered)
	}, [sortType, sortValue])

	useEffect(async () => {
		const response = await getCollections();
		setCollections(response.data.collections)
	}, [])

	return (
		<LayoutTwo>
			{/* breadcrumb */}
			<BreadcrumbOne
				pageTitle="Shop Left Sidebar"
				backgroundImage="/assets/images/esme-images/products_banner.png"
			>
				<ul className="breadcrumb__list">
					<li>
						<Link href="/" as={process.env.PUBLIC_URL + "/"}>
							<a>Home</a>
						</Link>
					</li>

					<li>Shop Left Sidebar</li>
				</ul>
			</BreadcrumbOne>
			<div className="shop-page-content">
				{/* shop page header */}
				<ShopHeader
					getLayout={getLayout}
					getFilterSortParams={getFilterSortParams}
					productCount={totalLength}
					sortedProductCount={apiProducts.length}
					shopTopFilterStatus={shopTopFilterStatus}
					setShopTopFilterStatus={setShopTopFilterStatus}
				/>

				{/* shop header filter */}
				{/* <SlideDown closed={shopTopFilterStatus ? false : true}>
					<ShopFilter products={products} getSortParams={getSortParams} />
				</SlideDown> */}

				{/* shop page body */}
				<div className="shop-page-content__body space-mt--r130 space-mb--r130">
					<Container>
						<Row>
							<Col
								lg={3}
								className="order-2 order-lg-1 space-mt-mobile-only--50"
							>
								{/* shop sidebar */}
								<ShopSidebar
									products={apiProducts}
									getSortParams={getSortParams}
									collections={collections}
								/>
							</Col>

							<Col lg={9} className="order-1 order-lg-2">
								{/* shop products */}
								<ShopProducts layout={layout} products={apiProducts} />

								{/* shop product pagination */}
								<div className="pro-pagination-style">
									{/* <Paginator
										totalRecords={totalLength}
										pageLimit={pageLimit}
										pageNeighbours={2}
										setOffset={setOffset}
										currentPage={currentPage}
										setCurrentPage={setCurrentPage}
										pageContainerClass="mb-0 mt-0"
										pagePrevText="«"
										pageNextText="»"
									/> */}
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</LayoutTwo>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.productData
	};
};

export default connect(mapStateToProps)(LeftSidebar);