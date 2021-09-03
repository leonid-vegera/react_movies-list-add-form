import React, { Component } from 'react';
import propTypes from 'prop-types';

export class NewMovie extends Component {
  state = {
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  };

  handleSubmit = () => {
    const { title, description, imgUrl, imdbUrl, imdbId } = this.state;

    this.props.onAdd({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    });
  }

  clearForm = () => {
    this.setState({
      title: '',
      description: '',
      imgUrl: '',
      imdbUrl: '',
      imdbId: '',
    });
  }

  render() {
    return (
      <>
        <h1>ADD NEW FILM</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.handleSubmit();
            this.clearForm();
          }}
        >
          <label>
            <h2>Title</h2>
            <input
              type="text"
              name="title"
              placeholder="Enter title here"
              value={this.state.title}
              onChange={(event) => {
                this.setState({
                  title: event.target.value,
                });
              }}
              required
            />
          </label>

          <label>
            <h2>Description</h2>
            <textarea
              type="text"
              name="description"
              placeholder="Enter description here"
              value={this.state.description}
              onChange={(event) => {
                this.setState({
                  description: event.target.value,
                });
              }}
              rows="10"
              cols="23"
            />
          </label>

          <label>
            <h2>imgUrl</h2>
            <input
              type="text"
              name="imgUrl"
              placeholder="Enter imgUrl here"
              value={this.state.imgUrl}
              onChange={(event) => {
                this.setState({
                  imgUrl: event.target.value,
                });
              }}
              required
            />
          </label>

          <label>
            <h2>imdbUrl</h2>
            <input
              type="text"
              name="imdbUrl"
              placeholder="Enter imdbUrl here"
              value={this.state.imdbUrl}
              onChange={(event) => {
                this.setState({
                  imdbUrl: event.target.value,
                });
              }}
              required
            />
          </label>

          <label>
            <h2>imdbId</h2>
            <input
              type="text"
              name="imdbId"
              placeholder="Enter imdbId here"
              value={this.state.imdbId}
              onChange={(event) => {
                this.setState({
                  imdbId: event.target.value,
                });
              }}
              required
            />
          </label>

          <div>
            <button
              type="submit"
            >
              Add film
            </button>
          </div>

        </form>
      </>
    );
  }
}

NewMovie.propTypes = {
  onAdd: propTypes.func.isRequired,
};
