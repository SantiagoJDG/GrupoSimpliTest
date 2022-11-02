import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./layout.module.css";
import "react-slideshow-image/dist/styles.css";
import { Accesory } from "../../types/Accesory";
import { AccesoryVariants } from "../../types/Accesory";

const AccesoryList: FC<{ products: Accesory[] }> = ({ products }) => (
  <Container>
    <MapProductsToCards products={products} />
  </Container>
);

const MapProductsToCards: FC<{ products: Accesory[] }> = ({ products }) => {
  return (
    <Row md={4} className="g-4">
      {products.map((product: Accesory) => {
        return (
          <Col className="article-list-grid">
            <Card className={styles.card}>
              {product.variants.map((variant: AccesoryVariants) => {
                const firstImage = variant.images[0];
                return (
                  <div>
                    <img
                      className={styles.imageBox}
                      src={firstImage.formats.thumbnail.url}
                    />
                    <Card.Body>
                      <div className={styles.flex}>
                        <div className={styles.infoBox}>
                          <div className={styles.align}>
                            <Card.Title>{product.name}</Card.Title>
                          </div>
                          <Card.Subtitle className="mb-2 text-muted">
                            ${variant.prices[0].amount}
                          </Card.Subtitle>
                        </div>
                      </div>
                      <Link
                        key={product.uuid}
                        className="justify-content-md-center"
                        href="/detail/[id]"
                        as={`/detail/${product.uuid}`}
                        passHref
                      >
                        <Button className={styles.button}>Ver Mas</Button>
                      </Link>
                    </Card.Body>
                  </div>
                );
              })}
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AccesoryList;
