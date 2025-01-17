import React from "react";
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.title} data={infos} renderAdd={true} />
      ))}
    </section>
  );
}

export default Category;
