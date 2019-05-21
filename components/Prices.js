class Prices extends React.Component {
  state = {
    currency: 'USD',
  };

  render() {
    let list = '';
    const currency = ['USD', 'EUR', 'GBP'];
    if (currency.includes(this.state.currency)) {
      list = (
        <li className='list-group-item'>
          Bitcoin Rate for {this.props.bpi[this.state.currency].description}:{' '}
          <span className='badge badge-primary'>
            {this.props.bpi[this.state.currency].code}
          </span>
          <strong> {this.props.bpi[this.state.currency].rate}</strong>
        </li>
      );
    }
    return (
      <div>
        <ul className='list-group'>{list}</ul>
        <br />
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className='form-control'
        >
          <option value='USD'>USD</option>
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
