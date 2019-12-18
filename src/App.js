import React, {Fragment} from 'react';
import {Container, Row, Col, Card, Carousel} from 'react-bootstrap';
import 'antd/dist/antd.css'
import { Input } from 'antd';
import { Icon } from "react-icons-kit";
import { bell } from "react-icons-kit/feather";
import {starFullOutline,starHalfOutline,heartFullOutline} from "react-icons-kit/typicons";
import View from "react-flexbox";
import './App.css';

const { Search } = Input;


function App() {
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6" style={{ backgroundColor: "#2c71b3"  }}>
            {/* HEADER */}
            <View>
              <View>
                <div  style={{ marginTop: 10, marginBottom: 7 }}>
                  <Search
                    placeholder="Cari di Lakupon"
                    onSearch={value => console.log(value)}
                    style={{ width: 400 }}
                  />
                </div>
              </View>
              <View
              column width="10%"
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2
              }}
              >
                <Icon icon={bell} size={18} style={{ color: "white" }} />
              </View>
            </View>
            {/* CAROUSEL */}
            <div style={{ marginTop: 10 }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625057832_600.jpg"
                  alt="lakupon"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625165438_600.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            </div>
            {/* ALERT */}
            <div className=" mt-2 alert alert-danger" role="alert">
              Announcement (ex. pemeliharaan sistem dari pukul 09.00 - 15.00)
            </div>
            <p style={{ color: "#ffffff", fontSize: 15, fontWeight: "600"}}>Kategori </p>
            {/* KATEGORI */}
            <div style={{ marginTop: 15 }}>
              <View auto row>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15,
                      borderSize: 1,
                      borderColor: "#000"
                    }}
                  >
                  </div>
                  <p style={{ marginTop: 5, color: "#ffffff" }}>Makanan</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                  </div>
                  <p style={{ marginTop: 5, color: "#ffffff" }}>Kegiatan</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                  </div>
                  <p style={{ marginTop: 5, color: "#ffffff" }}>Perawatan</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                  </div>
                  <p style={{ marginTop: 5, color: "#ffffff" }}>Wisata</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                  </div>
                  <p style={{ marginTop: 5, color: "#ffffff" }}>Semua</p>
                </View>
              </View>
            </div>
            {/* Lakupon special */}
            <div>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16, color: "#ffffff" }}>
                    Lakupon Spesial
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      marginRight:10,
                      color: "#ffffff",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>
            <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-50"
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625057832_600.jpg"
                  alt="lakupon"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 h-50"
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625165438_600.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50 h-50"
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625165438_600.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            </div>
            {/* Produk Terbaru */}
            <div style={{marginTop: 7}}>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16, color: "#ffffff" }}>
                    Produk Terbaru
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      marginRight:10,
                      color: "#ffffff",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>

            <div classNAme="shadow p-3 mb-5 bg-black rounded">
              <View auto row>
                <View column width="50%">
                  <Card style={{ width: "96%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625057832_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Lasagna Makan Mang Engking Jombang</Card.Title>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 50.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.60.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
                <View column width="50%">
                  <Card style={{ width: "96%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625165438_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Sapi Goreng Makan Mang Engking Jombang</Card.Title>

                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 60.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.70.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
              </View>
            </div>
            {/* REKOMENDASI KAMI */}
            <div style={{marginTop: 7}}>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16, color: "#ffffff" }}>
                  Rekomendasi Kami
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      marginRight:10,
                      color: "#ffffff",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>

            <div classNAme="shadow p-3 mb-5 bg-black rounded">
              <View auto row>
                <View column width="50%">
                  <Card style={{ width: "96%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625057832_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Lasagna Makan Mang Engking Jombang</Card.Title>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 50.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.60.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
                <View column width="50%">
                  <Card style={{ width: "96%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625165438_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Sapi Goreng Makan Mang Engking Jombang</Card.Title>

                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 60.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.70.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
              </View>
            </div>
            {/* Produk Terbaru */}
            <div style={{marginTop: 7}}>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16, color: "#ffffff" }}>
                    Makanan Terpouler
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      marginRight:10,
                      color: "#ffffff",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>

            <div classNAme="shadow p-3 mb-5 bg-black rounded">
              <View auto row>
                <View column width="50%">
                  <Card style={{ width: "96%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625057832_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Lasagna Makan Mang Engking Jombang</Card.Title>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 50.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.60.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
                <View column width="50%">
                  <Card style={{ width: "96%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9392-201911251625165438_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Sapi Goreng Makan Mang Engking Jombang</Card.Title>

                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 60.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.70.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
              </View>
            </div>

              {/* KENAPA MEMILIH */}
              <div style={{marginTop:20, color: "#ffffff"}}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center",
                    marginBottom: 20,
                  }}
                >
                  Kenapa Memilih Lakupon?
                </p>
              </div>
              <View auto row style={{marginBottom:20}}>
                <View
                  column
                  style={{
                    alignItems: "center",
                    width: "20%"
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#cbd6da",
                      borderRadius: 90,
                      borderSize: 1,
                      borderColor: "#000",
                      marginBottom: 5
                    }}
                  >
                  </div>
                  <p style={{ textAlign: "center", color: "#ffffff" }}>
                    Gratis Ongkir Seluruh Indonesia
                  </p>
                </View>
                <View
                  column
                  style={{
                    alignItems: "center",
                    width: "20%"
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#cbd6da",
                      borderRadius: 90,
                      borderSize: 1,
                      borderColor: "#000"
                    }}
                  >
                  </div>
                  <p style={{ textAlign: "center", color: "#ffffff", paddingBottom:10,  }}>
                    Harga Termurah
                  </p>
                </View>
              </View>


            <div style={{ marginTop: 10 }}>
              <p style={{ color: "#ffffff",fontWeight: "500", textAlign: "center" }}>
                Lebih Mudah Menggunakan Aplikasi Lakupon. <br />
                Download sekarang dan nikmati semua kemudahannya
              </p>
            </div>
            <div style={{ marginLeft:'30%', marginTop: 10}}>
              <img
                style={{ alignSelf:"center", width: "60%"}}
                src="https://honkbarkstudios.com/wp-content/uploads/2016/03/app-store-badge.png"
              />
            </div>
            <div style={{marginTop:20}}>
              <p style={{color: "#ffffff", textAlign:'center'}}>2019 Hak Cipta PT. Online Pertama</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
