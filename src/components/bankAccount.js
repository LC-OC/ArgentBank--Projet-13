import React from "react";
import { bankAccount } from "../data/accountMock";

const BankAccount = () => {
  return (
    <div>
      <h2 className="sr-only">Accounts</h2>
      {bankAccount.map((account, index) => {
        return (
          <section key={index} className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">
                {account.description}
              </p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default BankAccount;
