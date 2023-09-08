import Repo from "@/app/components/Repo";
import RepoDir from "@/app/components/RepoDir";
import Link from "next/link";
import React, { Suspense } from "react";

interface Params {
  name: string;
}

const RepoPage = ({ params: { name } }: { params: Params }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back To Repositories
      </Link>
      <Suspense fallback="Loading Repo...">
        <Repo name={name} />
      </Suspense>
      <Suspense fallback="Loading Directories...">
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
