import {topNav} from './components/topNav'
import {tnsSingle, tnsPromotion, tnsCarouselBanking, tnsPoker } from './components/tns-slider';
import {modalLogin} from './components/modal-login';
import {videosHome} from './components/videos-home';
import tablecaballos from './components/tablecaballos';
import tabs from './components/tabs';

(()=>{

topNav();
tnsCarouselBanking();
modalLogin();

if (document.body.classList.contains('home')) {
tnsSingle();	
tnsPromotion();
videosHome();
}
else if (document.body.classList.contains('Poker')) {
tnsPoker();
}
else if (document.body.classList.contains('Caballos')) {
tablecaballos();
}
else if (document.body.classList.contains('Banca')) {
  tabs();
}
else if (document.body.classList.contains('BonoBienvenidaDeportes')) {
  tnsPromotion();
}
else if (document.body.classList.contains('BonoBienvenidaCasino')) {
  tnsPromotion();
}
else if (document.body.classList.contains('BonoRecarga')) {
  tnsPromotion();
}



})();