import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { withBookstoreService } from '../../components/hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

import BookList from '../../components/book-list';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = ({bookList: { books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch)
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
