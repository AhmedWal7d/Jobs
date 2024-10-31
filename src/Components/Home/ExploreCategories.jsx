import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ExploreCategories() {
  const { t } = useTranslation();

    return <>
     <div className='container mt-3'>
      <h3 className='fw-bold'> {t("exploreCategories")} </h3>
      <div className='row mt-2'>
        <div className='col-3 col-sm-3 col-md-2 mt-3'>
          <div className="category active">
            <i className="fa-solid fa-briefcase"></i>
            <p> {t("Job")} </p>
          </div>
        </div>
        <div className='col-3 col-sm-3 col-md-2 mt-3'>
          <div className="category active">
            <i className="fas fa-tools"></i>
            <p> {t("service")}</p>
          </div>
        </div>
        <div className='col-3 col-sm-3 col-md-2 mt-3'>
          <div className="category active">
            <i className="fa-solid fa-shop"></i>
            <p>{t("shop")}</p>
          </div>
        </div>
        <div className='col-3 col-sm-3 col-md-2 mt-3'>
          <div className="category active">
            <i className="fa-solid fa-magnet"></i>
            <p>{t("request")}</p>
          </div>
        </div>
        <div className='col-3 col-sm-3 col-md-2 mt-3'>
          <div className="category active">
            <i className="fa-solid fa-briefcase"></i>
            <p> {t("Job")}</p>
          </div>
        </div>
        <div className='col-3 col-sm-3 col-md-2 mt-3'>
          <div className="category active">
            <i className="fas fa-tools"></i>
            <p>{t("service")}</p>
          </div>
        </div>
    
      </div>
    </div>
    </>
}
