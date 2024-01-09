import "./dashboard.css";
import downArrow from "../../assets/Path 2 Copy.svg";
import { useState } from "react";
import sort from "../../assets/Sort.svg";
import download from "../../assets/download.svg";
import drop from "../../assets/drop.svg";
import info from "../../assets/Info.svg";

export default function Dashboard() {
  const [searchbar, setSearchbar] = useState("");

  const items = [];
  for (let i = 0; i < 13; i++) {
    items.push(
      <div className="item">
        <div className="orderid">#281209</div>
        <div className="orderdate">7 July, 2023</div>
        <div className="orderamount">&#8377;1,278.23</div>
        <div className="transactionfee">&#8377;22</div>
      </div>
    );
  }

  console.log(items);

  return (
    <div className="dashboard">
      <div className="heading">
        <p>Overview</p>
        <div>
          Last Month <img src={downArrow} />
        </div>
      </div>
      <div className="overview">
        <div className="online-order">
          <p>Online Orders</p>
          <p className="amount">231</p>
        </div>
        <div className="amount-received">
          <p>Amount Received</p>
          <p className="amount">&#8377;23,92,312.19</p>
        </div>
      </div>
      <div className="transactions">
        <p className="heading">Transactions | This Month</p>
        <div className="view">
          <div className="sorting">
            <input
              type="text"
              className="searchbyid"
              placeholder=" Search by order ID..."
              value={searchbar}
              onChange={(e) => setSearchbar(e.target.value)}
            />
            <div>
              <div className="sort">
                Sort <img src={sort} />
              </div>
              <div className="download">
                <img src={download} />
              </div>
            </div>
          </div>

          <div className="label">
            <div>Order ID</div>
            <div className="orderdate">
              <span>Order date</span> <img src={drop} />
            </div>
            <div className="orderamount">Order amount</div>
            <div className="transactionfee">
              <span> Transactional fees</span> <img src={info} />
            </div>
          </div>
          <div className="items-list">{items}</div>
          <div className="pagination">
            <div className="prev">
              <img src={downArrow} /> Previous
            </div>
            <div className="page-number">
              <div>1</div>
              <div>...</div>
              <div className="active">10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
            </div>
            <div className="next">
              Next <img src={downArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
