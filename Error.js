import React from 'react'

export const Error = () => {
  return (
    <div>
        <div className="main-wrapper ">
  <div className="error-page">
    <div className="main-wrapper">
      <div className="header d-none">
        <ul className="nav nav-tabs user-menu">
          <li className="nav-item">
            <a
              id="dark-mode-toggle"
              className="dark-mode-toggle"
              href="/react/template/admin/404"
            >
              <i className="light-mode">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-sun "
                >
                  <g>
                    <circle cx={12} cy={12} r={5} />
                    <line x1={12} y1={1} x2={12} y2={3} />
                    <line x1={12} y1={21} x2={12} y2={23} />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1={1} y1={12} x2={3} y2={12} />
                    <line x1={21} y1={12} x2={23} y2={12} />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              </i>
              <i className="dark-mode">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-moon "
                >
                  <g>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </g>
                </svg>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="error-box">
        <img
          src="https://doccure.dreamguystech.com/react/template/1ea4455c3f2cd2bbd8790939d4c3997d.png"
          className="img-fluid"
          alt={404}
        />
        <h2>Oops! This Page is Not Found.</h2>
        <p>The requested page dose not exist.</p>
        <a className="btn btn-primary" href="/">
          <i className="me-2">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-home "
            >
              <g>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </g>
            </svg>
          </i>
          Back to Home
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
