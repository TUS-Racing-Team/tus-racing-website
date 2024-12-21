"use client"
import "./formula-student.css";
import React, { useState, useEffect } from "react";
import GoUpButton from "../components/go-up/goUp";

const FormulaStudent = () => {
  return (
    <div className="formula-student-container">
      <div>
        <h1>FormulaStudent</h1>
      </div>
      <GoUpButton />
    </div>
  );
};

export default FormulaStudent;
