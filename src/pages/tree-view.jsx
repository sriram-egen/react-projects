import React from 'react'
import TreeView from '../components/tree-view';
import menus from "../components/tree-view/data"

function TreeViewPage() {
    return (
        <div>
         {/* Tree View Component */}
         <TreeView menus={menus} />
        </div>
       );
}

export default TreeViewPage