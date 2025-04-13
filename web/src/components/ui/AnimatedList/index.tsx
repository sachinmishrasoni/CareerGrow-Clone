import React from 'react';
import classNames from 'classnames';
import './index.css'; // import custom CSS

type ListItem = {
    label: string;
    href?: string;
    onClick?: () => void;
};

type Props = {
    items: ListItem[];
    direction?: 'horizontal' | 'vertical';
};

const HoverAnimatedList: React.FC<Props> = ({ items, direction = 'vertical' }) => {
    return (
        <ul className={classNames(
            direction === 'horizontal' ? 'flex space-x-6' : 'flex flex-col space-y-3'
        )}>
            {items.map((item, index) => {
                const Wrapper = item.href ? 'a' : 'span';
                return (
                    <li
                        key={index}
                        className="group relative text-sm text-gray-700 "
                    >
                        <Wrapper
                            href={item.href}
                            onClick={item.onClick}
                            className="relative z-10 inline-block cursor-pointer hover-underline-animation"
                        >
                            {item.label}
                            <span className="underline-bar" />
                        </Wrapper>
                    </li>
                );
            })}
        </ul>
    );
};

export default HoverAnimatedList;
