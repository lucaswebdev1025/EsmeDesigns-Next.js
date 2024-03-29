import Link from "next/link";
import CustomScroll from "react-custom-scroll";
import { IoIosClose } from "react-icons/io";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import API from '../../../api';
import { deleteFromCart } from "../../../redux/actions/cartActions";

const CartOverlay = ({
  activeStatus,
  getActiveStatus,
  cartItems,
  deleteFromCart
}) => {
  let mainPrice = 0;
  let extraPayPrice = 0;
  let totalAmount = 0;
  console.log("MAXIMUS cartItems=>", cartItems)
  const { addToast } = useToasts();

  const handleDeleteProduct = (product, addToast) => {
    console.log("CartOverlay ====>", product.itemsId)

    if (localStorage.getItem("OrderId") && localStorage.getItem("OrderId") !== "") {
      let parameters = {
        "ordersId": localStorage.getItem("OrderId"),
        "itemsIds": [
          {
            "itemsId": product.itemsId
          }
        ]
      }

      const tokenInStorage = localStorage.getItem('accessToken')

      const formData = {
        "feaMethod": "deleteOrdersItems",
        "accessToken": tokenInStorage,
        "parameters": JSON.stringify(parameters)
      }

      API.post('/', new URLSearchParams(formData))
        .then(response => {
          if (response.data.errorCode === "0") {
            addToast("Order was successfully removed!", { appearance: "success", autoDismiss: true });
            // Router.push('/other/cart');
            deleteFromCart(product, null)
          } else {
            addToast(response.data.errorMessage, { appearance: "error", autoDismiss: true });
          }
        })
        .catch(error => {
          console.log('error', error);
        });

    } else {
      addToast("Please Order the products and add to cart!", { appearance: "error", autoDismiss: true });
    }
  }

  return (
    <div className={`cart-overlay ${activeStatus ? "active" : ""}`}>
      <div
        className="cart-overlay__close"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      />
      <div className="cart-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="cart-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas cart content container  =======*/}
        <div className="cart-overlay__content-container">
          <h3 className="cart-title">Cart</h3>
          {cartItems.length >= 1 ? (
            <div className="cart-product-wrapper">
              <div className="cart-product-container">
                <CustomScroll allowOuterScroll={true}>
                  {cartItems.map((product, i) => {

                    mainPrice += product.totalItems ? product.totalItems * parseInt(product.mainPrice) : product.quantity * parseInt(product.mainPrice)
                    extraPayPrice += product.extraPrice;
                    totalAmount += product.totalItems ? product.totalItems : product.quantity
                    return (
                      <div className="single-cart-product" key={i}>
                        <span className="cart-close-icon">
                          <button
                            onClick={() => handleDeleteProduct(product, addToast)}
                          >
                            <IoIosClose />
                          </button>
                        </span>
                        <div className="image">
                          <Link
                            href={`/shop/product-basic/[slug]?slug=${product.productName}`}
                            as={
                              "/shop/product-basic/" + product.productName
                            }
                          >
                            <a>
                              <img
                                src={
                                  product.picture.length > 0 && product.picture[0].url
                                }
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="content">
                          <h5>
                            <Link
                              href={`/shop/product-basic/[slug]?slug=${product.productName}`}
                              as={
                                "/shop/product-basic/" + product.productName
                              }
                            >
                              <a>{product.productName}</a>
                            </Link>
                          </h5>
                          <p>
                            <span className="cart-count">
                              {product.totalItems ? product.totalItems : product.quantity} x{" "}
                            </span>{" "}
                            <span className="discounted-price">
                              ${parseInt(product.mainPrice).toFixed(2)}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CustomScroll>
              </div>
              {/*=======  subtotal calculation  =======*/}
              <p className="cart-subtotal">
                <span className="subtotal-title">Main Price:</span>
                <span className="subtotal-amount">
                  ${mainPrice.toFixed(2)}
                </span>
              </p>
              <p className="cart-subtotal">
                <span className="subtotal-title">Extra Price:</span>
                <span className="subtotal-amount">
                  ${(extraPayPrice * totalAmount).toFixed(2)}
                </span>
              </p>
              <p className="cart-subtotal">
                <span className="subtotal-title">Quantity:</span>
                <span className="subtotal-amount">
                  {totalAmount}
                </span>
              </p>
              <p className="cart-subtotal">
                <span className="subtotal-title">Total Price:</span>
                <span className="subtotal-amount">
                  ${(extraPayPrice * totalAmount + mainPrice).toFixed(2)}
                </span>
              </p>
              {/*=======  cart buttons  =======*/}
              <div className="cart-buttons">
                <Link
                  href="/other/cart"
                  as={"/other/cart"}
                >
                  <a>view cart</a>
                </Link>
                <Link
                  href="/other/checkout"
                  as={"/other/checkout"}
                >
                  <a>checkout</a>
                </Link>
              </div>
            </div>
          ) : (
            "No items found in cart"
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
