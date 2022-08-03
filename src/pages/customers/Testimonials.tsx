import MagicGrid from "components/MagicGrid";
import { Customer } from "pages/customers/Customer";
import React from "react";

const Testimonials = () => {
  return (
    <MagicGrid gap={10}>
      <Customer
        postedAt=""
        body="Sizzy saved my cate from a tree"
        author={{ name: "john" }}
      />
      <Customer
        postedAt=""
        body="Sizzy saved my cate from a tree"
        author={{ name: "john" }}
      />
      <Customer
        postedAt=""
        body="Sizzy saved my cate from a tree"
        author={{ name: "john" }}
      />
      <Customer
        postedAt=""
        body="Sizzy saved my cate from a tree"
        author={{ name: "john" }}
      />
      <Customer
        postedAt=""
        body="Sizzy saved my cate from a tree"
        author={{ name: "john" }}
      />
    </MagicGrid>
  );
};

export default Testimonials;
