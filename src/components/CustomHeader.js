import React from 'react';
import { Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function CustomHeader(props) {
  return (
    <div className="header" style={{ maxHeight: '20vh' }}>
      <div className="header-title">Priorizador</div>
      <div className="header-info">
        <a
          href="https://medium.com/@d.riveros.garcia/una-propuesta-para-que-la-ayuda-covid-19-llegue-a-tantas-familias-paraguayas-como-sea-posible-8adfe1101806"
          target="_blank"
        >
          <InfoCircleOutlined />
        </a>
      </div>
      <div className="header-selector">
        <Select
          defaultValue="tekopora"
          onChange={props.onChange}
          style={{ width: 180 }}
        >
          <Option value="almuerzo">Almuerzo escolar</Option>
          <Option value="fundacion">Fundación Paraguaya</Option>
          <Option value="techo">Techo</Option>
          <Option value="tekopora">Tekoporā</Option>
        </Select>
      </div>

      <div className="header-right">
        <img
          className="header-logo"
          src="reaccion2.png"
          alt="Reaccion"
          style={{ height: 50 }}
        />
        <img
          className="header-logo"
          src="codium-logo-white.svg"
          alt="Codium"
          style={{ height: 38 }}
        />
      </div>
    </div>
  );
}
