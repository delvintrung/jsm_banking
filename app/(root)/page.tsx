import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    redirect("/sign-in");
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.name || "Guest"}
            subtext="Access and manage your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10000.5}
          />
        </header>
        Recent Transactions
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
