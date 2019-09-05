class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          <div><b>Pavel Sizov</b></div>
          <div>HR Manager of Development subdivision</div>
        </p>
        <p>
          <table>
            <tbody>
              <tr>
                <td>M</td>
                <td>
                  <a href="tel:+79292192859">+7 929 219 28 59</a>
                </td>
              </tr>
              <tr>
                <td>T</td>
                <td>
                  <a href="tel:+73432021850">+7 343 202 18 50</a>
                </td>
              </tr>
              <tr>
                <td>S</td>
                <td>
                  <a href="skype:sezovpg?chat">sezovpg</a>
                </td>
              </tr>
              <tr>
                <td>E</td>
                <td>
                  <a href="mailto:hr.ekb@motorsport.com">hr.ekb@motorsport.com</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <a style={{ color: 'black', fontWeight: 'bold' }} href="https://www.motorsportnetwork.com">www.motorsportnetwork.com</a>
          </div>
          <div>Sheinkmana str. 55, office 1307</div>
          <div>Yekaterinburg <span style={{ color: 'red' }}>|</span> 620014, Russia</div>
        </p>
        <p>
          <div>PRIVILEGE AND CONFIDENTIALITY NOTICE</div>
          <div>Please be advised the information contained in this email message is confidential and intended only for use by the recipient. If you are not the named recipient, you are hereby notified that any disclosure, distribution, dissemination, or copying of the information is prohibited. If the information has been directed to you in error, please contact the sender immediately via a reply to the sender's email or the telephone number listed above.</div>
        </p>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
