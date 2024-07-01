// components/Tree.tsx
"use client"
import React, { useState } from 'react';

interface TreeNode {
    id: number;
    name: string;
    children: TreeNode[];
}

const initialTree: TreeNode[] = [
    {
        id: 1,
        name: 'Root',
        children: [
            {
                id: 2,
                name: 'Child 1',
                children: [],
            },
            {
                id: 3,
                name: 'Child 2',
                children: [],
            },
        ],
    },
];

const Tree= () => {
    const [treeData, setTreeData] = useState<TreeNode[]>(initialTree);

    const addNode = (nodeId: number) => {
        const newNode = { id: Date.now(), name: 'New Node', children: [] };

        const addNodeRecursively = (nodes: TreeNode[]): TreeNode[] => {
            return nodes.map(node => {
                if (node.id === nodeId) {
                    return { ...node, children: [...node.children, newNode] };
                }
                return { ...node, children: addNodeRecursively(node.children) };
            });
        };

        setTreeData(addNodeRecursively(treeData));
    };

    const renderTree = (nodes: TreeNode[]) => {
        return nodes.map(node => (
            <li key={node.id}>
                <span onClick={() => addNode(node.id)}>{node.name}</span>
                {node.children.length > 0 && <ul>{renderTree(node.children)}</ul>}
            </li>
            
    ));
    };

    return <ul>{renderTree(treeData)}</ul>;
};

export default Tree;
    