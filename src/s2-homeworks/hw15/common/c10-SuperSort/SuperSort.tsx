import React from 'react'
import down from '../../../../assets/icons8-сортировка-24.png'
import up from '../../../../assets/icons8-сортировать-во-возрастанию-30.png'
import none from '../../../../assets/icons8-сортировать-24.png'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = none

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => if (sort === down) {
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
