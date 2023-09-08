"use client";

import { useEffect, useState } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
      setIsLoading(false);
    };
    fetchCourses();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Traversy Media</h1>
      <SearchBar
        getSearchResult={(result) => {
          setCourses(result);
        }}
      />
      <Courses courses={courses} />
    </>
  );
}
