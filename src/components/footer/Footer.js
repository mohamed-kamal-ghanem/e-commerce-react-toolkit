import React from "react";
import "./Footer.css";
import { FaEnvelope, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h3 className="footer-top-title"> متواجدين دائما لمساعدتك</h3>
        <div className="footer-top-email">
          <span className="footer-top-text"> تواصل معنا عبر الايميل</span>
          <span className="footer-top-email-address">
            <FaEnvelope className="email-icon" />
            cahiraCairo@fakeemail.com
          </span>
        </div>
      </div>
      <div className="footer-items-wrapper">
        <div className="footer-item">
          <h4 className="footer-item-title"> الالكترونيات</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link">الكاميرات و تسجيل الفيديو</li>
            <li className="footer-item-link">الاجهزه المنزليه</li>
            <li className="footer-item-link"> الهواتف</li>
            <li className="footer-item-link">سماعات الرأس</li>
            <li className="footer-item-link">التلفزيونات</li>
            <li className="footer-item-link">اجهزة التابلت</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title"> الازياء</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> ازياء رجاليه </li>
            <li className="footer-item-link"> ازياء نسائيه</li>
            <li className="footer-item-link"> ازياء الاولاد</li>
            <li className="footer-item-link"> نظارات</li>
            <li className="footer-item-link">المجوهرات</li>
            <li className="footer-item-link"> الساعات</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title"> المطبخ و الاجهزه المنزليه</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> ديكورات منازل </li>
            <li className="footer-item-link"> الاثاث</li>
            <li className="footer-item-link"> المطبخ وادوات الطعام</li>
            <li className="footer-item-link"> مستلزمات الحمام</li>
            <li className="footer-item-link">اجهزة صوت و فيديو</li>
            <li className="footer-item-link"> مستلزمات الحدائق</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title"> الجمال</h4>
          <ul className="footer-item-links">
            <li className="footer-item-link"> العطور </li>
            <li className="footer-item-link"> المكياج</li>
            <li className="footer-item-link"> العنايه بالبشره</li>
            <li className="footer-item-link"> الجسم و الاستحمام</li>
            <li className="footer-item-link">العنايه بالشعر</li>
            <li className="footer-item-link"> منتجات الرعايه الصحيه</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <FaCopyright /> 2023 BY Mohamed Kamal
      </div>
    </div>
  );
};

export default Footer;
