import React from "react";
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import img1 from "../Assets/img4.webp";
import img2 from "../Assets/img3.webp";
import img3 from "../Assets/DM1123_100.webp";
import img4 from "../Assets/DV1245_010.webp";
import img5 from "../Assets/BV2671_657.webp";
import img6 from "../Assets/NF0A3C8D_LE4_M3.webp";

import img12 from "../Assets/mens_gird_1_img.jfif";
import img13 from "../Assets/mens_gird_1_img2.jfif";
import img14 from "../Assets/mens_gird2_1_img.jfif";
import img15 from "../Assets/mens_gird2_2_img.jfif";
import img16 from "../Assets/mens_gird2_3_img.jfif";

import img7 from "../Assets/Screenshot (194).png";
import img8 from "../Assets/Screenshot (195).png";
import img9 from "../Assets/Screenshot (197).png";
import img10 from "../Assets/Screenshot (199).png";
import img11 from "../Assets/Screenshot (200).png";

import img17 from "../Assets/imgD.png";
import img18 from "../Assets/imgC.png";
import img19 from "../Assets/imgB.png";
import img20 from "../Assets/imgA.png";

import "./Men.css";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";


export default function Men() {
  const Navigate = useNavigate()
  const runningFunc = () => {
    Navigate('/runningshoes')
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          className="right-div"
          style={{
            display: "flex",
            width: "90%",
            margin: "auto",
            gap: "30px"
          }}
        >
          <div
            className="names-div"
            style={{

              textAlign: "left",
            }}
          >
            <Box>
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Brands
              </Text>
              <Text>Nike</Text>
              <Text>adidas</Text>
              <Text>Jordan</Text>
              <Text>Converse</Text>
              <Text>On</Text>
              <Text>New</Text>
              <Text>Balance</Text>
              <Text>Puma</Text>
              <Text>Crocs</Text>
              <Text>Brooks</Text>
              <Text>Reebok</Text>
              <Text>Vans</Text>
            </Box>
            <Box>
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Shoes
              </Text>
              <Text>Running</Text>
              <Text>Casual</Text>
              <Text>Sandals, Slides & Slippers</Text>
              <Text>Training & Cleats</Text>
              <Text>Boots</Text>
              <Text>Sizes 14-20</Text>
              <Text>All Shoes</Text>
            </Box>
            <Box>
              <Text fontSize={"20px"} fontWeight={"bold"}>
                Clothing
              </Text>
              <Text>Shirts & Tanks</Text>
              <Text>Hoodies & Sweatshirts</Text>
              <Text>Sweatpants & Joggers</Text>
              <Text>Coats & Vests</Text>
              <Text>Shorts & Swimwear</Text>
              <Text>Matching Sets </Text>
              <Text>Denim & Jeans </Text>
              <Text>2 for $40 Tees</Text>
              <Text> Socks & Underwear</Text>
              <Text> Fan Gear & Jerseys</Text>
              <Text> All Clothing</Text>
            </Box>

            <Box>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Accessories
              </Text>
              <Text>Hats & Headbands</Text>
              <Text>Socks</Text>
              <Text>Bags & Backpacks</Text>
              <Text>Underwear</Text>
              <Text>Crocs Jibbitz </Text>
              <Text> Shoe Care</Text>
              <Text>Fitness Gear</Text>
              <Text>Face Masks</Text>
              <Text>Cold Weather Gear</Text>
              <Text> Water Bottles</Text>
              <Text> All Accessories</Text>
            </Box>
          </div>

          <div
            style={{
              margin: "auto",
              marginBottom: "30px",
              paddingRight: "10px"
            }}
          >
            <div
              className="top-right-div"
              style={{ width: "100%", textAlign: "left" }}
            >
              <h1 >
                MEN'S SHOES, CLOTHING & ACCESSORIES
              </h1>
            </div>

            <div className="men-shop-by-top-cat">
              <h1>
                SHOP BY CATEGORY
              </h1>
            </div>
            <Grid
              width={"100%"}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap={1}
            >
              <GridItem onClick={runningFunc}>
                <Image src={img1} />
                <Text fontWeight={"bold"}>RUNNING SHOES</Text>
                <a style={{ textDecoration: "underline" }}>Shop Now →</a>
              </GridItem>

              <GridItem>
                <Image src={img2} />
                <Text fontWeight={"bold"}>CASUAL SHOES</Text>
                <a style={{ textDecoration: "underline" }}>Shop Now →</a>
              </GridItem>

              <GridItem>
                <Image src={img3} />
                <Text fontWeight={"bold"}>BASKETBALL SHOES</Text>
                <a style={{ textDecoration: "underline" }}>Shop Now →</a>
              </GridItem>
              <GridItem>
                <Image src={img4} />
                <Text fontWeight={"bold"}>SWEATSHIRTs & HOODIES</Text>
                <a style={{ textDecoration: "underline" }}>Shop Now →</a>
              </GridItem>

              <GridItem>
                <Image src={img5} />
                <Text fontWeight={"bold"}>SWEATPANTS & JOGGERS</Text>
                <a style={{ textDecoration: "underline" }}>Shop Now →</a>
              </GridItem>
              <GridItem>
                <Image src={img6} />
                <Text fontWeight={"bold"}>JACKET & OUTWEAR</Text>
                <a style={{ textDecoration: "underline" }}>Shop Now →</a>
              </GridItem>
            </Grid>
            <br />
            <br />



            <div className="men-treanding-container">
              <Heading size='lg' marginBottom='10px'>
                TRENDING OUTFITS
              </Heading>
              <div>
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src='https://content.stylitics.com/images/collage/782482cca2383e91c85ed1104b2da5672ff89ac176d1c5?png=true&background=f2f2f2' alt="" />
              </div>
            </div>




            <Heading size='md' margin='20px' >WHAT'S HOT RIGHT NOW</Heading>
            <div className="men-hot-container">

              <Link ><img className="img1" src={img12} />
                <p >Nike Air Max</p>
              </Link>
              <Link ><img className="img2" src={img13} />
                <p >classic</p>
              </Link>


            </div>



            <div>
              <Grid
                width={"100%"}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                  xl: "repeat(3, 1fr)",
                }}
                gap={1}
              >
                <GridItem>
                  <Image src={img14} />
                  <p style={{ textDecoration: "underline" }}>Graphic Tees</p>

                </GridItem>

                <GridItem>
                  <Image src={img15} />
                  <p style={{ textDecoration: "underline" }}>Comfy Kicks</p>

                </GridItem>

                <GridItem>
                  <Image src={img16} />
                  <p style={{ textDecoration: "underline" }}>Sweatshirts & Joggers</p>

                </GridItem>

              </Grid>
            </div>

            <div className="Afterslideshow" style={{ width: "100%", margin: "auto", display: "flex", padding: "30px", textAlign: "center", justifyContent: "center", marginTop: "30px", marginBottom: "30px" }}>
              <div id="firstdiv" className="Afterslideshow-divs">Men's Shoes</div>
              <div className="Afterslideshow-divs">Women's Shoes</div>
              <div className="Afterslideshow-divs">Boys' Shoes</div>
              <div className="Afterslideshow-divs">Girls' Shoes</div>
              <div className="Afterslideshow-divs">Men's Clothing</div>
              <div className="Afterslideshow-divs">Women's Clothing</div>
              <div id="lastdiv" className="Afterslideshow-divs">Sale</div>
            </div>


          </div>
        </div>




      </div>

      <div style={{ justifyContent: "center", width: "95%", margin: "auto" }}>
        <div
          style={{
            margin: "auto",
            width: "100%",
            marginBottom: "30px",
            marginTop: "50px",
            textAlign: "left"
          }}
        >
          <Grid
            width={"100%"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(1, 1fr)",
              xl: "repeat(1, 1fr)",
            }}
            gap={1}
          >
            <GridItem textAlign={"justify"}>
              <Text fontWeight={"bold"}> MEN’S ATHLEISURE WEAR</Text>
              <Text>
                Whether you’re hitting the gym, hanging with your friends, or
                watching the game, nothing beats men’s athleisure wear for your
                on-the-go lifestyle. The days when stuffy suits and dress shoes
                ruled your closet are long gone. These days, it’s all about
                athleisure clothing for men. The must-haves like athletic graphic
                tees and athletic shorts are complemented by stylized versions of
                classics, like joggers, crewnecks, and wind jackets. We can’t forget
                about the staple in everyone’s wardrobe – hoodies. Finish Line has
                you covered with the essential sweatshirts, Nike underwear and more
                from the brands you gotta have. Shop Men’s athleisure and
                accessories from Nike, adidas, Jordan, and more to ensure you’re
                always ahead of the trends
              </Text>
            </GridItem>
            <br />

            <GridItem textAlign={"justify"}>
              <Text fontWeight={"bold"}>MEN’S ATHLEISURE SHOES</Text>
              <Text>
                Laid-back looks aren’t complete without staple footwear. Men’s
                athleisure shoes round out every ‘fit you have, ensuring your look
                is fresh from head to toe. From running-inspired models to
                basketball sneakers to iconic Jordans, there’s a pair of sneakers to
                finish off your athleisure vibe. Lace-up or slip-on these standout
                sneakers and step out in style.
              </Text>
            </GridItem>
          </Grid>
        </div>
        <div
          style={{
            margin: "auto",
            width: "80%",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        >
          <Grid
            width={"100%"}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={1}
          >
            <GridItem>
              <Image src={img17} />
            </GridItem>

            <GridItem>
              <Image src={img18} />
            </GridItem>

            <GridItem>
              <Image src={img19} />
            </GridItem>
            <GridItem>
              <Image src={img20} />
            </GridItem>
          </Grid>
        </div>
        {/* <Grid3 /> */}
        <Footer />
      </div>
    </>
  );
};


