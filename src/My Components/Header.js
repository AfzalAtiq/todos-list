import React from 'react'
import PropsTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">{props.title}</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {props.searchBar ? <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propsTypes = {
  title: PropsTypes.string,
  searchBar: PropsTypes.bool.isRequired
}