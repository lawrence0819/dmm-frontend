import * as React from 'react';

const Semantify = require('react-semantify');
const prettysize = require('prettysize');

class Header extends React.Component<any, any>{
  render() {
    return (
      <thead>
        <tr>
          <th>Repository</th>
          <th>Tag</th>
          <th>ID</th>
          <th>Virtual Size</th>
          <th>Created</th>
        </tr>
      </thead>
    );
  }
}

class Row extends React.Component<any, any>{
  render() {
    const { image } = this.props;
    const repositories: string[] = [];
    const tags: string[] = [];
    image.RepoTags.map(repoTag => {
      let str = repoTag.split(':');
      repositories.push(str[0]);
      tags.push(str[1]);
    });
    return (
      <tr>
        <td>{repositories.join(',')}</td>
        <td>{tags.join(',')}</td>
        <td>{image.Id.substring(0, 12)}</td>
        <td>{prettysize(image.VirtualSize)}</td>
        <td>{image.Created}</td>
      </tr>
    )
  }
}

class Body extends React.Component<any, any>{
  render() {
    return (
      <tbody>
        {
          _.values(this.props.images).map((image:any) => {
            return (
              <Row key={image.Id} image={image}/>
            )
          })
        }
      </tbody>
    );
  }
}

class ImageTable extends React.Component<any, any>{
  render() {
    return (
      <Semantify.Table>
        <Header />
        <Body images={this.props.images} />
      </Semantify.Table>
    );
  }
}

export default ImageTable;