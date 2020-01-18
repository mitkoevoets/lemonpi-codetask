import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { DataViewLayoutOptions } from 'primereact/dataview';

export function dataTableHeader(onChange: (event: any) => void): JSX.Element {
  return (<div className="p-grid" style={{ marginTop: '0px' }}>
    <div className="p-col-12 p-md-4" style={{ textAlign: 'left' }}>
      <Dropdown placeholder="Sort By"/>
    </div>
    <div className="p-col-6 p-md-4">
      <InputText placeholder="Search by label"/>
    </div>
    <div className="p-col-6 p-md-4" style={{ textAlign: 'right' }}>
      <DataViewLayoutOptions layout={'horizontal'} onChange={onChange}/>
    </div>
  </div>);
}
