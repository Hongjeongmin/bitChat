import React from 'react';
import classnames from 'classnames';
import './Container.scss';
import Item from './item';
import Pagination from './pagination';

const DEMO_PROPS = {
  list_title: '타이틀',
  list_type: 'home',
  login: false
}

class ExampleComponent extends React.Component {
  render() {
    const { list_title, list_type, login } = DEMO_PROPS;
    let list_type_class;

    switch (list_type) {
      case 'home':
      case 'login':
        list_type_class = 'type1';
        break;

      case 'end':
        list_type_class = 'type2';
        break;
    
      default:
        break;
    }

    const list_wrap_class = classnames("list_wrap", list_type_class, {
      'is-login': login
    });

    return (
      <div className={list_wrap_class}>
        <h2 className="list_title">{list_title}</h2>
        <div className="list_area">
          <Item></Item>
        </div>
        <Pagination></Pagination>
      </div>
    );
  }
}

export default ExampleComponent;