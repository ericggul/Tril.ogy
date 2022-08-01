import React, { useState, useEffect } from "react";
import { Link, match } from "react-router-dom";
import { ReactSVG } from "react-svg";
import styles from "./SummaryPage.module.scss";

import { projects } from "../../utils/Constants";
import Navigator from "../../components/Navigator/Navigator";

import useMousePosition from "../../hooks/useMousePosition";
import useTouchPosition from "../../hooks/useTouchPosition";
import UseMediaQuery from "../../hooks/useMediaQuery";

import SummaryDesktopPage from "../../components/SummaryPageRelated/SummaryDesktopPage";
import SummaryMobilePage from "../../components/SummaryPageRelated/SummaryMobilePage";

import { useParams } from "react-router-dom";

function SummaryPage({ match }) {
  const isDeviceWidthWideAsDesktop = UseMediaQuery("(min-width: 600px)");

  const params = useParams();
  const id = Number(params.id);
  const project = projects.find((project) => project.id === id);

  console.log(project?.description.name);

  const [opacity, setOpacity] = useState(0);

  const hoverMessage = (
    <div className={styles.hoverMessage} styles={{ opacity: opacity }}>
      Click n' View
    </div>
  );

  return (
    <>
      {isDeviceWidthWideAsDesktop && <SummaryDesktopPage id={id} project={project} />}
      {!isDeviceWidthWideAsDesktop && <SummaryMobilePage id={id} project={project} />}
    </>
  );
}

export default SummaryPage;
