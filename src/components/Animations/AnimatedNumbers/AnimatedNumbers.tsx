    import * as React from 'react'
    import CountUp from 'react-countup';
    import VisibilitySensor from 'react-visibility-sensor';

    interface AnimatedNumbersProps {
        from: number;
        to: number;
        offset?: {
            top?: number;
            left?: number;
            bottom?: number;
            right?: number;
        };
        duration?: number;
        once?: boolean;
        separator?: | ',' | '.';
        style?: React.CSSProperties;
        className?: string;
    }

    const AnimatedNumbers:React.FC<AnimatedNumbersProps> = (props) => {
        const [visible, setVisible] = React.useState(false);

        return (
            <VisibilitySensor
                active={(props.once ?? false) ? !visible : true}
                onChange={(isVisible:boolean) => {
                    if (visible && (props.once ?? false)) {
                        return;
                    }
                    setVisible(isVisible);
                }}
                partialVisibility
                offset={props.offset ?? { bottom: 200 }}
            >
                {
                    ({ isVisible }:{isVisible:boolean}) => (
                        <div>
                            {
                                isVisible
                                    ? <CountUp
                                        enableScrollSpy
                                        scrollSpyOnce
                                        useEasing
                                        separator={props.separator ?? '.'}
                                        start={props.from}
                                        end={props.to}
                                        duration={props.duration ?? 2}
                                        className={props.className}
                                        style={props.style}
                                    />
                                    : <span className={props.className} style={props.style}>{props.from}</span>
                            }
                        </div>
                    )
                }
            </VisibilitySensor>
        )
    }

    export default AnimatedNumbers
