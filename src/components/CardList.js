import React from 'react';
import Card from './Card';
import styles from '../utilities/styles';

export const CardList = props => {
  return <div style={styles.cardGroup}>{props.cards.map(card => <Card {...card} />)}</div>;
};

export default CardList;