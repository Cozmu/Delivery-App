import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/AdminFormStyles.css';

export default function NavBar() {
  const history = useHistory();
  const [user, setUser] = useState();
  const customerProducts = 'customer_products';
  const dataTestid = {
    products: 'element-navbar-link-products',
    orders: 'element-navbar-link-orders',
    fullName: 'element-navbar-user-full-name',
    logout: 'element-navbar-link-logout',
  };

  useEffect(() => {
    const objUser = localStorage.getItem('user');
    const parsedUser = JSON.parse(objUser);
    setUser(parsedUser);
  }, []);

  function logout() {
    localStorage.removeItem('user');
    history.push('/login');
  }

  const checkRole = user?.role === 'customer';
  const isAdmin = user?.role === 'administrator';

  return (
    <Navbar
      style={
        { height: '100px' }
      }
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
    >
      <Container>

        {checkRole && (
          <Navbar.Brand
            href="/customer/products"
            data-testid={ `${customerProducts}__${dataTestid.products}` }
          >
            PRODUTOS
          </Navbar.Brand>)}
        {isAdmin ? <h4 className="title-adm">GERENCIAR USUÁRIOS</h4> : (
          <Navbar.Brand
            onClick={ () => history.push(checkRole
              ? '/customer/orders' : '/seller/orders') }
            data-testid={ `${customerProducts}__${dataTestid.orders}` }
          >
            {checkRole ? 'MEUS PEDIDOS' : 'PEDIDOS'}
          </Navbar.Brand>)}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link
              data-testid={ `${customerProducts}__${dataTestid.fullName}` }
            >
              {user?.name}
            </Nav.Link>
            <Button
              size="lg"
              eventKey={ 2 }
              data-testid={ `${customerProducts}__${dataTestid.logout}` }
              onClick={ () => logout() }
              class="btn-primary"
            >
              Sair
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
