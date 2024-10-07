"use client";
import React from "react";
import { Button, Flex } from "antd";

export default function Home() {
  return (
    <div>
      <h1> Dashboard Main</h1>
      <Flex gap="small" wrap>
        <Button href="/dashboard">Dashboard Page</Button>
        <Button type="primary" href="/auth">
          Login Page
        </Button>
      </Flex>
    </div>
  );
}
