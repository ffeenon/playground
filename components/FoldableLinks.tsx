"use client";

import { NodeApi, Tree } from "react-arborist";
import useResizeObserver from "use-resize-observer";
import { PiHamburger } from "react-icons/pi";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linksTree = [
  { id: "/", name: "Home" },
  {
    id: "/effects",
    name: "Effects",
    children: [
      {
        id: "/basic_filter",
        name: "Basic Filter",
      },
    ],
  },
  {
    id: "/light",
    name: "Light",
    children: [{ id: "/all_lights", name: "All Lights" }],
  },
];

function getPath(node: NodeApi<any>): string {
  let result = "";
  let currentNode: NodeApi<any> = node;
  while (currentNode?.level >= 0) {
    result = `${currentNode.id}${result}`;
    currentNode = currentNode.parent as NodeApi<any>;
  }
  return result;
}

// @ts-ignore
function Node({ node, style, dragHandle }) {
  const path = useMemo(() => getPath(node), []);
  const currentPath = usePathname();
  return (
    <div style={style} ref={dragHandle}>
      {node.isLeaf ? "🍁" : "🗀"}
      {node.isLeaf ? (
        <Link
          className={`${currentPath === path ? "bg-gray-500 text-white" : ""}`}
          href={path}
        >
          {node.data.name}
        </Link>
      ) : (
        node.data.name
      )}
    </div>
  );
}

export default () => {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const [isFolded, setIsFolded] = useState(true);

  return (
    <>
      <div
        className={`absolute w-full h-full flex left-0 top-0 ${isFolded ? "-z-10" : "z-0"}`}
      >
        <div
          ref={ref}
          className={`w-1/4 h-full bg-white border-r-2 border-r-fuchsia-300 transition-all duration-300 ease-in-out ${isFolded ? "-translate-x-full" : "-translate-x-0"}`}
        >
          <Tree
            // className="bg-amber-400"
            width={width}
            height={height}
            initialData={linksTree}
          >
            {/*@ts-ignore*/}
            {Node}
          </Tree>
        </div>
        {!isFolded && (
          <div className="flex-grow" onMouseEnter={() => setIsFolded(true)} />
        )}
      </div>
      {isFolded && (
        <PiHamburger
          onClick={() => setIsFolded(false)}
          className="absolute left-0 top-1/2 -translate-y-1/2  rounded text-white bg-amber-400 hover:bg-amber-200 hover:cursor-pointer"
          size={32}
        />
      )}
    </>
  );
};
