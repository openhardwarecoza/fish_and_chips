var loggedInUser = false;
$(document).ready(function() {

  var newDate = new Date();
  var datetime = "Date: " + newDate.today() + " / Time: " + newDate.timeNow();

  const req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
      const user = JSON.parse(req.response).user;
      console.log(user)
      loggedInUser = user;
      $(".username").html(user.username[0].toUpperCase() + user.username.substring(1).toLowerCase())
    }
  };
  req.open("GET", "/user", true);
  req.send();

  var sampleinvoice = `
  <center>
  <img src="img/logo.png" style="max-width: 50%;"></img>
  </center>
  <hr class="bg-darkGray" />
  <h2 class="ml-2">Order No. 847</h2>
  <span class="ml-2">` + datetime + `</span>
  <hr class="bg-darkGray" />
  <table class="table striped">
    <thead>
      <tr>
        <th>Description</th>
        <th>
          <div class="headernum">Unit Price</div>
        </th>
        <th>
          <div class="headernum">Qty</div>
        </th>
        <th>
          <div class="headernum">Total</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fish (medium)</td>
        <td>
          <div class="unitprice">29</div>
        </td>
        <td>
          <div class="qty">2</div>
        </td>
        <td>
          <div class="currency">58.00</div>
        </td>
      </tr>
      <tr>
        <td>Chips (large)</td>
        <td>
          <div class="unitprice">22</div>
        </td>
        <td>
          <div class="qty">2</div>
        </td>
        <td>
          <div class="currency">44.00</div>
        </td>
      </tr>
      <!-- Totals -->
      <tr>
        <td colspan="5">
          <hr class="bg-darkGray" />
        </td>
      </tr>

      <tr>
        <td></td>
        <td></td>
        <td>Subtotal</td>
        <td>
          <div class="currency">102.00</div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>VAT</td>
        <td>
          <div class="currency">0.00</div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>
          <h3 class="currency">102.00</h3>
        </td>
      </tr>
    </tbody>
  </table>
  `

  $("#col2").html(sampleinvoice)
});

Date.prototype.today = function() {
  return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function() {
  return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}