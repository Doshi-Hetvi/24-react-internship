import React from 'react'
import './assets/css/loader.css'

export const CustomLoader = () => {
  const path = window.location.pathname
  return (
    <>
      {path === "" || path === "/login" || path === "/" || path === "/register" || path === "/forgot" || path === "/reset" ? <div class="dot-spinner px-4 " style={{ marginTop: 300, marginLeft: 700 }}>

        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div> : <div class="dot-spinner px-4" style={{ marginTop: 300, marginLeft: 500 }}>

        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div>
      }
    </>
  )
}
