import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoMdCart } from "react-icons/io";
import { MultiSelect } from "react-multi-select-component";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { BulkProduct } from "../../components/BulkProduct";
import { LayoutTwo } from "../../components/Layout";
import {
  addBulkToCart, decreaseQuantity, deleteAllFromCart, deleteFromCart
} from "../../redux/actions/cartActions";

const Bulk = ({
  cartItems,
  bulkProduct,
  decreaseQuantity,
  addBulkToCart,
  deleteFromCart,
  deleteAllFromCart
}) => {

  const { addToast } = useToasts();
  let cartTotalPrice = 0;
  console.log("bulkProduct////////", bulkProduct)

  //custom 
  const [selectedLining, setSelectedLining] = useState("");
  const [selectedLiningFabricsColor, setSelectedLiningFabricsColor] = useState("");
  const [selectedFabrics, setSelectedFabrics] = useState("");
  const [selectedFabricsColor, setSelectedFabricsColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFirstComboFabrics, setSelectedFirstComboFabrics] = useState("");
  const [selectedSecondComboFabrics, setSelectedSecondComboFabrics] = useState("");
  const [selectedThirdComboFabrics, setSelectedThirdComboFabrics] = useState("");
  const [selectedForthComboFabrics, setSelectedForthComboFabrics] = useState("");
  const [selectedFirstComboFabricsColor, setSelectedFirstComboFabricsColor] = useState("");
  const [selectedSecondComboFabricsColor, setSelectedSecondComboFabricsColor] = useState("");
  const [selectedThirdComboFabricsColor, setSelectedThirdComboFabricsColor] = useState("");
  const [selectedForthComboFabricsColor, setSelectedForthComboFabricsColor] = useState("");
  const [alterationSelected, setAlterationSelected] = useState([]);
  const [styleOptionSelected, setStyleOptionSelected] = useState([]);
  const [selectedLengthAttribute, setSelectedLengthAttribute] = useState("");
  const [selectedMeshColorAttribute, setSelectedMeshColorAttribute] = useState("");
  const [selectedSlitAttribute, setSelectedSlitAttribute] = useState("");

  const [selectedFabric, setSelectedFabric] = useState({ combo: 0, fabric: 0, color: 0 });
  const [totalItems, setTotalItems] = useState(0);
  const [selectedSizeCategory, setSelectedSizeCategory] = useState("Regular Size")

  const [selectedComboFabric, setSelectedComboFabric] = useState(
    bulkProduct[0] && bulkProduct[0].combos.map((combo, i) => {
      return { combo: i, fabric: 0, color: 0 }
    })
  );
  const [regularSizeArray, setRegularSizeArray] = useState(
    JSON.stringify(bulkProduct[0] && bulkProduct[0].sizeCategories.map((each) => {

      const sizes = each.sizes.map((eachSize) => {
        return {
          sizeCode: 0,
          sizeName: eachSize.sizeName
        }
      })
      each.sizes = sizes
      return each
    }))
  );

  useEffect(() => {
    if (bulkProduct[0]) {
      if (bulkProduct[0].lining) {
        setSelectedLining(bulkProduct[0].lining[0].fabricsName)
      }
      if (bulkProduct[0].lining) {
        setSelectedLiningFabricsColor(bulkProduct[0].lining[0].fabricsColors[0].fabricsColorName)
      }
      if (bulkProduct[0].fabrics) {
        setSelectedFabrics(bulkProduct[0].fabrics[0].fabricsName)
      }
      if (bulkProduct[0].fabrics) {
        setSelectedFabricsColor(bulkProduct[0].fabrics[0].fabricsColors[0].fabricsColorName)
      }
      if (bulkProduct[0].sizeCategories) {
        setSelectedSize(bulkProduct[0].sizeCategories[0].sizes[0].sizeName)
      }

      if (bulkProduct[0].combos) {
        if (bulkProduct[0].combos[0]) {
          setSelectedFirstComboFabrics(bulkProduct[0].combos[0].fabric[0].fabricsName)
          setSelectedFirstComboFabricsColor(bulkProduct[0].combos[0].fabric[0].fabricsColors[0].fabricsColorName)
        }
        if (bulkProduct[0].combos[1]) {
          setSelectedSecondComboFabrics(bulkProduct[0].combos[1].fabric[0].fabricsName)
          setSelectedSecondComboFabricsColor(bulkProduct[0].combos[1].fabric[0].fabricsColors[0].fabricsColorName)
        }
        if (bulkProduct[0].combos[2]) {
          setSelectedThirdComboFabrics(bulkProduct[0].combos[2].fabric[0].fabricsName)
          setSelectedThirdComboFabricsColor(bulkProduct[0].combos[2].fabric[0].fabricsColors[0].fabricsColorName)
        }
        if (bulkProduct[0].combos[3]) {
          setSelectedForthComboFabrics(bulkProduct[0].combos[3].fabric[0].fabricsName)
          setSelectedForthComboFabricsColor(ulkProduct[0].combos[3].fabric[0].fabricsColors[0].fabricsColorName)
        }
      }
      if (bulkProduct[0].styleAttributes) {
        if (bulkProduct[0].styleAttributes[0].styleAttrybutesName === "Length") {
          setSelectedLengthAttribute(bulkProduct[0].styleAttributes[0].styleAttrybutesValues[0].styleAttrybutesValueName)
        }
        if (bulkProduct[0].styleAttributes[1].styleAttrybutesName === "Mesh color") {
          setSelectedMeshColorAttribute(bulkProduct[0].styleAttributes[1].styleAttrybutesValues[0].styleAttrybutesValueName)
        }
        if (bulkProduct[0].styleAttributes[2].styleAttrybutesName === "Optional slit") {
          setSelectedSlitAttribute(bulkProduct[0].styleAttributes[2].styleAttrybutesValues[0].styleAttrybutesValueName)
        }
      }
    }
  }, [bulkProduct]);

  //custom
  const alterationOptions = [];
  bulkProduct[0] && bulkProduct[0].styleAlterations.map((single, i) => {
    let array = {
      label: "",
      value: ""
    };
    array.label = single.styleAlterationName;
    array.value = single.price;
    alterationOptions.push(array)
  });

  const styleOptions = [];
  bulkProduct[0] && bulkProduct[0].styleOptions.map((single, i) => {
    let array = {
      label: "",
      value: ""
    };
    array.label = single.styleOptionName;
    array.value = single.price;
    styleOptions.push(array)
  });

  const setRegualrSizeArray = (e) => {

    // console.log(e.target.dataset.position)
    // console.log(e.target.value)
    let result = e.target.value;
    if (result === "") {
      result = 0;
    } else {
      const index = e.target.dataset.position.split('-')
      let sizeArray = JSON.parse(regularSizeArray)
      sizeArray[index[0]].sizes[index[1]].sizeCode = result.replace(/[^\d]/g, '');
      setRegularSizeArray(JSON.stringify(sizeArray))
      // console.log("Sizes", JSON.parse(regularSizeArray))
    }
  }

  const myTest = (
    bulkProduct,
    addToast,
    selectedFabrics,
    selectedFabricsColor,
    selectedLining,
    selectedLiningFabricsColor,
    selectedFirstComboFabrics,
    selectedSecondComboFabrics,
    selectedThirdComboFabrics,
    selectedForthComboFabrics,
    selectedFirstComboFabricsColor,
    selectedSecondComboFabricsColor,
    selectedThirdComboFabricsColor,
    selectedForthComboFabricsColor,
    selectedMeshColorAttribute,
    selectedLengthAttribute,
    selectedSlitAttribute,
    regularSizeArray,
    alterationSelected,
    styleOptionSelected,
    totalItems
  ) => {
    console.log("Cart bulkProduct", bulkProduct)
    console.log("Cart selectedFabrics", selectedFabrics)
    console.log("Cart selectedFabricsColor", selectedFabricsColor)
    console.log("Cart selectedLining", selectedLining)
    console.log("Cart selectedLiningFabricsColor", selectedLiningFabricsColor)
    console.log("Cart selectedFirstComboFabrics", selectedFirstComboFabrics)
    console.log("Cart selectedSecondComboFabrics", selectedSecondComboFabrics)
    console.log("Cart selectedFirstComboFabricsColor", selectedFirstComboFabricsColor)
    console.log("Cart selectedSecondComboFabricsColor", selectedSecondComboFabricsColor)
    console.log("Cart selectedMeshColorAttribute", selectedMeshColorAttribute)
    console.log("Cart selectedLengthAttribute", selectedLengthAttribute)
    console.log("Cart selectedSlitAttribute", selectedSlitAttribute)
    console.log("Cart regularSizeArray", regularSizeArray)
    console.log("Cart alterationSelected", alterationSelected)
    console.log("Cart styleOptionSelected", styleOptionSelected)
  }

  useEffect(() => {
    let sum = 0;
    JSON.parse(regularSizeArray).map((item) => {
      item.sizes.map((size) => {
        sum = sum + parseInt(size.sizeCode)
      })
    })

    console.log("Sum", sum)
    setTotalItems(sum)
  }, [regularSizeArray])

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Cart"
        backgroundImage="/assets/images/esme-images/products_banner.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>Bulk Order</li>
        </ul>
      </BreadcrumbOne>

      <BulkProduct bulkProductProps={bulkProduct}></BulkProduct>
      {/* cart content */}
      <div className="cart-content space-mt--r130 space-mb--r130">
        <Container>
          {bulkProduct && bulkProduct.length >= 1 ? (
            <Row>
              <Col lg={12}>
                {/* cart table */}
                <div className="cart-table">
                  <div style={{ borderBottom: "1px solid #ededed", display: "flex", padding: "10px", justifyContent: "end" }}>
                    <button
                      className="lezada-button lezada-button--medium"
                      onClick={() => deleteAllFromCart(addToast)}
                    >
                      add bulk order
                    </button>
                  </div>
                  <div style={{ display: "flex", padding: "10px", paddingTop: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Link
                        href={`/shop/product-basic/[slug]?slug=${bulkProduct[0].productName}`}
                        as={
                          process.env.PUBLIC_URL + "/shop/product-basic/" + bulkProduct[0].productName
                        }
                      >
                        <a>
                          <img
                            style={{ width: "115px" }}
                            src={
                              process.env.PUBLIC_URL +
                              bulkProduct[0].pictures[0].url
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </Link>
                      <Link
                        className="product-name"
                        href={`/shop/product-basic/[slug]?slug=${bulkProduct[0].productName}`}
                        as={
                          process.env.PUBLIC_URL + "/shop/product-basic/" + bulkProduct[0].productName
                        }
                      >
                        <a style={{ marginTop: "10px" }}>{bulkProduct[0].productName}</a>
                      </Link>
                    </div>

                    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
                      <Col lg={12} style={{ padding: "0px", display: "flex" }}>
                        <Col lg={3}>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            {bulkProduct[0].fabrics ? (
                              <div className="product-content__size-color">
                                <div className="product-content__size space-mb--20">
                                  <div style={{ marginRight: "10px" }} className="product-content__size__title">Fabrics</div>
                                  <div className="product-content__size__content">
                                    <select
                                      style={{ width: "100%", height: "37px", cursor: "pointer" }}
                                      onChange={(event) => {
                                        setSelectedFabrics(event.target.value.split("/")[0])
                                        setSelectedFabricsColor(event.target.value.split("/")[1])
                                      }}
                                    >
                                      {bulkProduct[0].fabrics &&
                                        bulkProduct[0].fabrics.map((single, i) => {
                                          return (
                                            <option key={i} value={`${single.fabricsName}/${single.fabricsColors[0].fabricsColorName}`}>{single.fabricsName}</option>
                                          );
                                        })
                                      }
                                    </select>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                            {selectedFabricsColor && (
                              <div className="product-content__size-color">
                                <div className="product-content__size space-mb--20">
                                  <div className="product-content__size__title"></div>
                                  <div className="product-content__size__content">
                                    <div className="product-content__color__content">
                                      <select
                                        style={{ width: "100%", height: "37px", cursor: "pointer" }}
                                        value={selectedFabricsColor}
                                        onChange={(event) => {
                                          setSelectedFabricsColor(event.target.value);
                                        }}
                                      >

                                        {bulkProduct[0].fabrics.map((single, j) => single.fabricsName === selectedFabrics ? single.fabricsColors.map((color, i) => {
                                          return (
                                            <option key={i} value={color.fabricsColorName}>{color.fabricsColorName}</option>
                                          );
                                        }) : "")}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </Col>
                        <Col lg={3}>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            {bulkProduct[0].lining ? (
                              <div className="product-content__size-color">
                                <div className="product-content__size space-mb--20">
                                  <div style={{ marginRight: "10px" }} className="product-content__size__title">Lining</div>
                                  <div className="product-content__size__content">
                                    <select
                                      style={{ width: "100%", height: "37px", cursor: "pointer" }}
                                      onChange={(event) => {
                                        setSelectedLining(event.target.value.split("/")[0])
                                        setSelectedLiningFabricsColor(event.target.value.split("/")[1])
                                      }}
                                    >
                                      {bulkProduct[0].lining &&
                                        bulkProduct[0].lining.map((single, i) => {
                                          return (
                                            <option key={i} value={`${single.fabricsName}/${single.fabricsColors[0].fabricsColorName}`}>{single.fabricsName}</option>
                                          );
                                        })
                                      }
                                    </select>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                            {selectedLiningFabricsColor && (
                              <div className="product-content__size-color">
                                <div className="product-content__size space-mb--20">
                                  <div className="product-content__size__title"></div>
                                  <div className="product-content__size__content">
                                    <div className="product-content__color__content">
                                      <select
                                        style={{ width: "100%", height: "37px", cursor: "pointer" }}
                                        value={selectedLiningFabricsColor}
                                        onChange={(event) => {
                                          setSelectedLiningFabricsColor(event.target.value);
                                        }}
                                      >

                                        {bulkProduct[0].lining.map((single, j) => single.fabricsName === selectedLining ? single.fabricsColors.map((color, i) => {
                                          return (
                                            <option key={i} value={color.fabricsColorName}>{color.fabricsColorName}</option>
                                          );
                                        }) : "")}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </Col>
                        {bulkProduct[0].combos ?
                          bulkProduct[0].combos.map((combo, comboIndex) => {
                            return (
                              <Col lg={3}>
                                <div className="product-content__size-color">
                                  <div className="product-content__size space-mb--20">
                                    <div style={{ marginRight: "10px" }} className="product-content__size__title">{combo.combosName}</div>
                                    <div className="product-content__size__content">
                                      <select
                                        style={{ width: "100%", height: "37px", cursor: "pointer" }}
                                        onChange={(event) => {
                                          if (comboIndex === 0) {
                                            setSelectedFirstComboFabrics(event.target.value)
                                          }
                                          if (comboIndex === 1) {
                                            setSelectedSecondComboFabrics(event.target.value)
                                          }
                                          if (comboIndex === 2) {
                                            setSelectedThirdComboFabrics(event.target.value)
                                          }
                                          if (comboIndex === 3) {
                                            setSelectedForthComboFabrics(event.target.value)
                                          }
                                          var index = event.target.selectedIndex
                                          var optionElement = event.target.childNodes[index]
                                          var comboId = optionElement.getAttribute('data-combo-index')
                                          var fabricId = optionElement.getAttribute('data-fabric-index')
                                          // console.log(comboId, fabricId)
                                          var tempArr = selectedComboFabric
                                          tempArr[comboId].combo = comboId;
                                          tempArr[comboId].fabric = fabricId;
                                          setSelectedComboFabric(tempArr)
                                          setSelectedFabric({ combo: comboId, fabric: fabricId })
                                        }}
                                      >
                                        {combo.fabric &&
                                          combo.fabric.map((item, i) => {
                                            return (
                                              <option data-combo-index={comboIndex} data-fabric-index={i} value={item.fabricsName}>{item.fabricsName}</option>
                                            );
                                          })
                                        }
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-content__size-color">
                                  <div className="product-content__size space-mb--20">
                                    <div className="product-content__size__title"></div>
                                    <div className="product-content__size__content">
                                      <div className="product-content__color__content">
                                        <select
                                          style={{ width: "100%", height: "37px", cursor: "pointer" }}
                                          value={bulkProduct[0].combos[selectedComboFabric[comboIndex].combo].fabric[selectedComboFabric[comboIndex].fabric].fabricsColors[selectedComboFabric[comboIndex].color].fabricsColorName}
                                          onChange={(event) => {
                                            if (comboIndex === 0) {
                                              setSelectedFirstComboFabricsColor(event.target.value)
                                            }
                                            if (comboIndex === 1) {
                                              setSelectedSecondComboFabricsColor(event.target.value)
                                            }
                                            if (comboIndex === 2) {
                                              setSelectedThirdComboFabricsColor(event.target.value)
                                            }
                                            if (comboIndex === 3) {
                                              setSelectedForthComboFabricsColor(event.target.value)
                                            }
                                            // console.log(event.target)
                                            var index = event.target.selectedIndex
                                            var optionElement = event.target.childNodes[index]
                                            // console.log('event.target.selectedIndex')
                                            // console.log(event.target.selectedIndex)
                                            // console.log(event.target.childNodes)
                                            // var optionElement = event.target
                                            // console.log(event.target.value)
                                            var comboId = optionElement.getAttribute('data-combo-index')
                                            var fabricId = optionElement.getAttribute('data-fabric-index')
                                            var colorId = optionElement.getAttribute('data-color-index')
                                            var tempArr = selectedComboFabric
                                            tempArr[comboId].combo = comboId;
                                            tempArr[comboId].fabric = fabricId;
                                            tempArr[comboId].color = colorId;
                                            // console.log('tempArr', tempArr)
                                            // console.log(product.combos)
                                            setSelectedComboFabric(tempArr)
                                            setSelectedFabric({ combo: comboId, fabric: fabricId, color: colorId })
                                          }}
                                        >

                                          {combo.fabric.map((single, fabricIndex) => ((fabricIndex == selectedComboFabric[comboIndex].fabric && selectedFabric.fabric != null) ? single.fabricsColors.map((color, i) => {
                                            return (
                                              <option data-combo-index={comboIndex} data-fabric-index={fabricIndex} data-color-index={i} value={color.fabricsColorName}>{color.fabricsColorName}</option>
                                            );
                                          }) : "")).filter((each) => (each !== ""))}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            );
                          }) : (
                            ""
                          )}
                      </Col>
                      <Col lg={12} style={{ display: "flex" }}>
                        {bulkProduct[0].styleAttributes ? (
                          <Col lg={6}>
                            <div style={{ alignItems: "baseline" }}>
                              <div style={{ display: "flex" }}>
                                {bulkProduct[0].styleAttributes.map((attr, i) => {
                                  return (
                                    <Col lg={4}>
                                      <div className="product-content__size-color">
                                        <div>
                                          <div style={{ marginBottom: "10px" }} className="product-content__size__title">{attr.styleAttrybutesName}</div>
                                          <div className="product-content__size__content">
                                            <select
                                              style={{ width: "100%", height: "37px", cursor: "pointer" }}
                                              onChange={(event) => {
                                                if (attr.styleAttrybutesName === "Length") {
                                                  setSelectedLengthAttribute(event.target.value)
                                                }
                                                if (attr.styleAttrybutesName === "Mesh color") {
                                                  setSelectedMeshColorAttribute(event.target.value)
                                                }
                                                if (attr.styleAttrybutesName === "Optional slit") {
                                                  setSelectedSlitAttribute(event.target.value)
                                                }
                                              }}
                                            >
                                              {attr.styleAttrybutesValues &&
                                                attr.styleAttrybutesValues.map((single, i) => {
                                                  return (
                                                    <option key={i} value={single.styleAttrybutesValueName}>{single.styleAttrybutesValueName}</option>
                                                  );
                                                })
                                              }
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  )
                                })}
                              </div>
                            </div>
                          </Col>
                        ) : (
                          ""
                        )}
                        <Col lg={6} style={{ display: "flex" }}>
                          {bulkProduct[0].styleAlterations ? (
                            <Col lg={7}>
                              <div className="product-content__size-color">
                                <div>
                                  <div style={{ marginBottom: "10px" }} className="product-content__size__title">Alteration</div>
                                  <div className="product-content__size__content">
                                    <MultiSelect
                                      options={alterationOptions}
                                      value={alterationSelected}
                                      onChange={setAlterationSelected}
                                      labelledBy="Select Alteration"
                                      hasSelectAll={false}
                                    />

                                  </div>
                                </div>
                              </div>
                            </Col>
                          ) : (
                            ""
                          )}

                          {bulkProduct[0].styleOptions ? (
                            <Col lg={5}>
                              <div className="product-content__size-color">
                                <div>
                                  <div style={{ marginBottom: "10px" }} className="product-content__size__title">Options</div>
                                  <div className="product-content__size__content">
                                    <MultiSelect
                                      options={styleOptions}
                                      value={styleOptionSelected}
                                      onChange={setStyleOptionSelected}
                                      labelledBy="Select"
                                      hasSelectAll={false}
                                    />
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ) : (
                            ""
                          )}
                        </Col>
                      </Col>
                      <Col lg={12} style={{ marginTop: "20px", marginLeft: "15px" }}>
                        {regularSizeArray ? (
                          <div className="product-content__size-color">
                            <div style={{ alignItems: "baseline" }}>
                              <div className="product-content__size__content" style={{ display: "flex", alignItems: "center" }}>
                                <Col lg={2}>
                                  <select
                                    style={{ width: "100%", height: "30px", cursor: "pointer" }}
                                    onChange={(event) => {
                                      setSelectedSizeCategory(event.target.value)
                                    }}
                                  >
                                    {JSON.parse(regularSizeArray).length > 1 ? JSON.parse(regularSizeArray).map((category, i) => {
                                      return (
                                        <option value={category.sizeCategoryName}>{category.sizeCategoryName}</option>
                                      )
                                    }) : ""}
                                  </select>
                                </Col>
                                <Col lg={10}>
                                  <div style={{ display: "flex" }}>
                                    {selectedSizeCategory === "Regular Size" && JSON.parse(regularSizeArray).length > 1 && JSON.parse(regularSizeArray)[0].sizes.map((size, j) => {
                                      return <div style={{ display: "flex", flexDirection: "column" }}>
                                        <span style={{ fontSize: "14px", textAlign: "center", color: "#333" }}>{size.sizeName}</span>
                                        <input style={{ width: "50px", textAlign: "center", margin: "10px" }} type="number" id={`size-${size.sizeName}`} value={size.sizeCode} data-position={`0-${j}`} name="amount" max="999" onChange={(e) => setRegualrSizeArray(e)} />
                                      </div>
                                    })}
                                    {selectedSizeCategory === "Specific Size" && JSON.parse(regularSizeArray).length > 1 && JSON.parse(regularSizeArray)[1].sizes.map((size, j) => {
                                      return (
                                        <>
                                          <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span style={{ fontSize: "14px", textAlign: "center", color: "#333" }}>{size.sizeName}</span>
                                            <input style={{ width: "50px", textAlign: "center", margin: "10px" }} type="number" id={`size-${size.sizeName}`} value={size.sizeCode} data-position={`1-${j}`} name="amount" max="999" min="0" onblur="if(this.value==''){this.value=0;}" onChange={(e) => setRegualrSizeArray(e)} />
                                          </div>
                                        </>
                                      )
                                    })}
                                  </div>
                                </Col>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </Col>
                      <Col lg={12} style={{ display: "flex" }}>
                        <Col lg={9}>{''}</Col>
                        <Col lg={3} style={{ textAlign: "center" }}>
                          <div className="product-content__size__title">Total Items:
                            <input style={{ width: "50px", textAlign: "center", margin: "10px" }} value={totalItems} disabled />
                          </div>
                        </Col>
                      </Col>
                      <Col lg={12} style={{ marginTop: "10px", display: "flex" }}>
                        <Col lg={6}>{''}</Col>
                        <Col lg={6}>
                          <table className="cart-table">
                            <thead>
                              <tr>
                                <th className="product-name" style={{ fontSize: "14px" }}>
                                  Unit Price
                                </th>
                                <th className="product-price" style={{ fontSize: "14px" }}>Discounted Price</th>
                                <th className="product-quantity" style={{ fontSize: "14px" }}>Extras</th>
                                <th className="product-subtotal" style={{ fontSize: "14px" }}>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{ textAlign: "center" }}>
                                <td style={{ paddingLeft: "0px" }}>${bulkProduct[0].standardPrice}</td>
                                <td style={{ paddingLeft: "0px" }}>${bulkProduct[0].discountedPrice}</td>
                                <td style={{ paddingLeft: "0px" }}>$0.00</td>
                                <td style={{ paddingLeft: "0px" }}>${bulkProduct[0].discountedPrice * totalItems}</td>
                              </tr>
                            </tbody>
                          </table>
                        </Col>
                      </Col>
                      <Col lg={12} style={{ display: "flex", marginTop: "20px" }}>
                        <Col lg={6}>{''}</Col>
                        <Col lg={6} style={{ textAlign: "center" }}>
                          <button
                            className="lezada-button lezada-button--medium"
                            onClick={() =>
                              addBulkToCart(
                                bulkProduct[0],
                                addToast,
                                selectedFabrics,
                                selectedFabricsColor,
                                selectedLining,
                                selectedLiningFabricsColor,
                                selectedFirstComboFabrics,
                                selectedSecondComboFabrics,
                                selectedThirdComboFabrics,
                                selectedForthComboFabrics,
                                selectedFirstComboFabricsColor,
                                selectedSecondComboFabricsColor,
                                selectedThirdComboFabricsColor,
                                selectedForthComboFabricsColor,
                                selectedMeshColorAttribute,
                                selectedLengthAttribute,
                                selectedSlitAttribute,
                                regularSizeArray,
                                alterationSelected,
                                styleOptionSelected,
                                totalItems
                              )
                              // myTest(
                              //   bulkProduct[0],
                              //   addToast,
                              //   selectedFabrics,
                              //   selectedFabricsColor,
                              //   selectedLining,
                              //   selectedLiningFabricsColor,
                              //   selectedFirstComboFabrics,
                              //   selectedSecondComboFabrics,
                              //   selectedThirdComboFabrics,
                              //   selectedForthComboFabrics,
                              //   selectedFirstComboFabricsColor,
                              //   selectedSecondComboFabricsColor,
                              //   selectedThirdComboFabricsColor,
                              //   selectedForthComboFabricsColor,
                              //   selectedMeshColorAttribute,
                              //   selectedLengthAttribute,
                              //   selectedSlitAttribute,
                              //   regularSizeArray,
                              //   alterationSelected,
                              //   styleOptionSelected,
                              // totalItems
                              // )
                            }
                          >
                            Save Order and Add to Cart
                          </button>
                        </Col>
                      </Col>
                    </div>
                  </div>
                </div>

              </Col>
              <Col lg={12} className="space-mb--r100">
                <div className="cart-coupon-area space-pt--30 space-pb--30">
                  <Row className="align-items-center">
                    <Col lg={7} className="space-mb-mobile-only--30">

                    </Col>
                    <Col lg={5} className="text-left text-lg-right">
                      <button
                        className="lezada-button lezada-button--medium"
                        onClick={() => deleteAllFromCart(addToast)}
                      >
                        clear bulk order
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={5} className="ml-auto">
                <div className="cart-calculation-area">
                  <h2 className="space-mb--40">Cart totals</h2>
                  <table className="cart-calculation-table space-mb--40">
                    <tbody>
                      <tr>
                        <th>SUBTOTAL</th>
                        <td className="subtotal">
                          ${cartTotalPrice.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <th>TOTAL</th>
                        <td className="total">${cartTotalPrice.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-calculation-button text-center">
                    <Link
                      href="/other/checkout"
                      as={process.env.PUBLIC_URL + "/other/checkout"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        proceed to checkout
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCart />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in cart</p>
                    <Link
                      href="/shop/left-sidebar"
                      as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        Shop Now
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div >
    </LayoutTwo >
  );
};

const mapStateToProps = (state) => {
  return {
    bulkProduct: state.bulkProductData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBulkToCart: (
      bulkProduct,
      addToast,
      selectedFabrics,
      selectedFabricsColor,
      selectedLining,
      selectedLiningFabricsColor,
      selectedFirstComboFabrics,
      selectedSecondComboFabrics,
      selectedThirdComboFabrics,
      selectedForthComboFabrics,
      selectedFirstComboFabricsColor,
      selectedSecondComboFabricsColor,
      selectedThirdComboFabricsColor,
      selectedForthComboFabricsColor,
      selectedMeshColorAttribute,
      selectedLengthAttribute,
      selectedSlitAttribute,
      regularSizeArray,
      alterationSelected,
      styleOptionSelected,
      totalItems
    ) => {
      dispatch(
        addBulkToCart(
          bulkProduct,
          addToast,
          selectedFabrics,
          selectedFabricsColor,
          selectedLining,
          selectedLiningFabricsColor,
          selectedFirstComboFabrics,
          selectedSecondComboFabrics,
          selectedThirdComboFabrics,
          selectedForthComboFabrics,
          selectedFirstComboFabricsColor,
          selectedSecondComboFabricsColor,
          selectedThirdComboFabricsColor,
          selectedForthComboFabricsColor,
          selectedMeshColorAttribute,
          selectedLengthAttribute,
          selectedSlitAttribute,
          regularSizeArray,
          alterationSelected,
          styleOptionSelected,
          totalItems
        )
      );
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bulk);
