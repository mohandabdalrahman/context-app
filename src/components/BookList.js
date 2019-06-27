import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{background:theme.ui}}>wind</li>
          <li style={{background:theme.ui}}>no escape</li>
          <li style={{background:theme.ui}}>snow</li>
        </ul>
      </div>
    );
  }
}
