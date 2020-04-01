import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  };

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    const transitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 250, exit: 250 },
    };

    if (!fish) return null;

    if (isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            {count}
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button
              type="button"
              onClick={() => {
                return this.props.deleteFromOrder(key);
              }}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available</li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
