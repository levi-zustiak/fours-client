import { ModalCard, Flex, Button } from '@styles/Global.styled';
import { Icon } from './Lose.styled';

export function Lose() {
    const newGame = () => {
        null
    };

    return (
        <ModalCard>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">   
                <g>
                    <path id="thumbs_down" d="m118.5,91.97187l-55,0c-15.18516,0 -27.5,12.30625 -27.5,26.72656l0,191.72656c0,15.18516 12.31484,26.72656 27.5,26.72656l55,0c15.18516,0 27.5,-12.31484 27.5,-26.72656l0,-190.96172c0,-15.18516 -12.28906,-27.49141 -27.5,-27.49141zm319.08594,178.8875c6.70313,-7.30469 10.91406,-17.01563 10.91406,-27.75781c0,-20.16953 -14.49766,-36.88438 -33.63594,-40.46797c3.81563,-6.19609 6.13594,-13.50078 6.13594,-22.09453c0,-18.32188 -12.03125,-33.67031 -28.57422,-39.04141c0.64453,-2.19141 1.07422,-5.20781 1.07422,-8.32734c0,-22.78203 -18.47656,-41.23281 -41.25,-41.23281l-50.43672,0c-29.74297,0 -58.67813,9.64219 -82.47422,27.48281l-29.33906,21.99141c-10.39844,7.78594 -16.5,20.04922 -16.5,32.25234l0.0923,137.5c0,0 -0.02011,-0.02011 0,0c0.06041,12.02266 5.26195,24.01094 15.39141,32.10625l14.00781,11.19766c70.36786,57.07109 38.74286,122.46953 92.96942,122.46953c26.60625,0 42.51328,-21.07188 42.51328,-41.34453c0,-13.01953 -10.10625,-49.94688 -29.66563,-82.51719l125.94141,0c22.79063,0 41.25,-18.45078 41.25,-41.23281c0,-21.81953 -17.01563,-39.52266 -38.41406,-40.98359z"/>
                </g>
            </Icon>
            <h2>You Lose...</h2>
            <Flex direction="row" gap="1rem" >
                <Button color="yellow" onClick={newGame}>New Game</Button>
                <Button color="red">Leave</Button>
            </Flex>
        </ModalCard>
    );
}

export default Lose;