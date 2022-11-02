import React, { FC } from "react";
import { Motorcycle } from "../../types/Motorcycle";
import { Slide } from "react-slideshow-image";
import { MotorcycleVariants } from "../../types/Motorcycle";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import styles from "./detailview.module.css";

const DetailView: FC<{ detail: Motorcycle }> = ({ detail }) => {
  return (
    <Container>
      <Row>
        {detail.variants.map((v: MotorcycleVariants) => {
          return (
            <div className={styles.flex}>
              <Col>
                <img src={v.images[0].url} alt="" />
              </Col>
              <Col>
                <div className={styles.detailBox}>
                  <h4>{detail.name}</h4>
                  <div className="mb-2 text-muted">
                    <h6>
                      {v.prices[0].currency} {v.prices[0].amount}
                    </h6>
                  </div>
                </div>
                <div className={styles.detailBox}>
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quo qui, minus nobis officia totam eveniet, facere libero
                    expedita sequi nam nostrum fugiat. Maxime asperiores
                    officiis sequi, quisquam voluptas molestias ullam.
                  </p>
                </div>
                <div></div>
              </Col>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default DetailView;
