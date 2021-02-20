import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

//���������� ������ � �����//
export class CKletka {
    row: number
    col: number
    constructor(x: number, y: number) {
        this.col = x;
        this.row = y;
    }
}

interface IProps {
    kletka: CKletka
}

export default class Kletka extends Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    //��� ������ ����������, ��� ������� �� ��//
    clickHandler = () => {
        console.log(`row: ${this.props.kletka.row} col: ${this.props.kletka.col}`);
    };

    //������� ��� � ��������������� ������//
    render() {
        return (
            <div>
                <Button onClick={this.clickHandler} style={{ height: "100px" }}>______ ______</Button>
            </div>
        )
    }
}
