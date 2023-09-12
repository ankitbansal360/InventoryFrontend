import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>

      <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)">
          <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
          <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
              <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
              Light
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
              <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
              Dark
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
          <li>
            <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
              <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
              Auto
              <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>
        </ul>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="arrow-right-circle" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </symbol>
        <symbol id="bootstrap" viewBox="0 0 118 94">
          <title>Bootstrap</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
        </symbol>
      </svg>

      <div class="col-lg-8 mx-auto p-4 py-md-5">
        <header class="pb-3 mb-5 border-bottom">
          <div class="d-flex align-items-center text-body-emphasis text-decoration-none">
            <FontAwesomeIcon class="bi me-3" width="40" height="32" icon={faBoxesStacked} />
            <div>
              <p class="fs-2 m-0 fw-bold">Inventory Tracking Application</p>
              <p class="fs-6 m -0">Created by Raghav Goel, Radha Agrawal, Ankit Bansal and Rishab Jain</p>
            </div>
          </div>
        </header>
        <main>
          <h1 class="text-body-emphasis">Keep Track</h1>
          <p class="fs-5 col-md-8">Create your account and manage energy products, suppliers, purchases, orders, sales and customers. You can create, read, update and delete these entities.</p>

          <div class="mb-5">
            <a href="" class="btn btn-primary btn-lg px-4 me-2">Sign Up</a>
            <a href="" class="btn btn-outline-primary btn-lg px-4">Login</a>
          </div>

          <hr class="col-3 col-md-2 mb-5" />

          <div class="row g-5">
            <div class="col-md-6">
              <h2 class="text-body-emphasis">Entities</h2>
              <ul class="list-unstyled ps-0">
                <li>
                  <a class="icon-link mb-1" href="" rel="noopener" target="_blank">
                    <svg class="bi" width="16" height="16"><use href="#arrow-right-circle" /></svg>
                    Products
                  </a>
                </li><li>
                  <a class="icon-link mb-1" href="" rel="noopener" target="_blank">
                    <svg class="bi" width="16" height="16"><use href="#arrow-right-circle" /></svg>
                    Suppliers
                  </a>
                </li>
                <li>
                  <a class="icon-link mb-1" href="" rel="noopener" target="_blank">
                    <svg class="bi" width="16" height="16"><use href="#arrow-right-circle" /></svg>
                    Purchases
                  </a>
                </li>
                <li>
                  <a class="icon-link mb-1" href="" rel="noopener" target="_blank">
                    <svg class="bi" width="16" height="16"><use href="#arrow-right-circle" /></svg>
                    Orders
                  </a>
                </li>
                <li>
                  <a class="icon-link mb-1" href="" rel="noopener" target="_blank">
                    <svg class="bi" width="16" height="16"><use href="#arrow-right-circle" /></svg>
                    Sales
                  </a>
                </li>
                <li>
                  <a class="icon-link mb-1" href="" rel="noopener" target="_blank">
                    <svg class="bi" width="16" height="16"><use href="#arrow-right-circle" /></svg>
                    Customers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer class="pt-5 my-5 text-body-secondary border-top">
          Created using .NET Core and React
        </footer>
      </div>
    </div>
  );
}

export default App;
