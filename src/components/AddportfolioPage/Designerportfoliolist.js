import React, { useState } from "react";

function Designerportfoliolist() {
  return (
    <div class="w-96">
      <button
        aria-current="true"
        type="button"
        class="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600"
      >
        First List
      </button>
      <button
        type="button"
        class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
      >
        A second button item
      </button>
      <button
        type="button"
        class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
      >
        A third button item
      </button>
      <button
        type="button"
        class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
      >
        A fourth button item
      </button>
      <button
        disabled=""
        type="button"
        class="block w-full cursor-default p-4 text-left text-neutral-500 focus:outline-none focus:ring-0"
      >
        A disabled button item
      </button>
    </div>
  );
}

export default Designerportfoliolist;
