import React, { createContext, useState } from 'react';

const StudentContext = createContext("gandhi");

export default function Create() {
  const [student, setStudent] = useState("gandhi");

  return (
    <>
      <StudentContext.Provider value={student}>
        <h1>{`${student}! Welcome to the session`}</h1>
      </StudentContext.Provider>
    </>
  );
}
