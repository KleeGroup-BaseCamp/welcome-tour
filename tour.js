const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const drawerIsOpen = () => document.querySelector('.topbar-application-menu').classList.contains('opened-layer')


const openDrawer = () => {
    if(!drawerIsOpen()){
        return new Promise((resolve) => {
            document.querySelector('#ctxApplicationMenu > div.topbar-ctxmenu-footer > a').click()
            setTimeout(() => {resolve()}, 1000)
        })
    }
}

const closeDrawer = () => {
    if(drawerIsOpen()){
        return new Promise((resolve) => {
            document.querySelector('#ctxApplicationMenu > div.topbar-ctxmenu-footer > a').click()
            resolve()
        })
    }
}

const buildButtons = (tour, displayBack, displayNext) => {
    const buttons = []
    if(displayBack){
        buttons.push(
            {
                text: 'Précédent',
                action: tour.back
            }
        )
    }
    if(displayNext){
        buttons.push(
            {
                text: 'Suivant',
                action: tour.next
            }
        )
    }
    return buttons
}

const tour = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: true,
    cancelIcon: {enabled: true},
  }
});

tour.addSteps([
{
  text: lorem,
  attachTo: {
    element: '.topbar-left',
    on: 'bottom'
  },
  title: 'Logo Klee',
  buttons: buildButtons(tour, false, true)
},
{
  text: lorem,
  attachTo: {
    element: '#mdar_102517_0_mdar_102516_0_mdar_102509_0_mdar_102502_1',
    on: 'auto'
  },
  beforeShowPromise: closeDrawer,
  title: 'Stories',
  buttons: buildButtons(tour, true, true)
},
{
  text: lorem,
  attachTo: {
    element: '#ctxApplicationMenu > div.topbar-ctxmenu-body.clearfix.ps',
    on: 'auto'
  },
  beforeShowPromise: openDrawer,
  title: 'Espace de travail',
  buttons: buildButtons(tour, true, true)
},
{
  text: lorem,
  attachTo: {
    element: '#ctxApplicationMenu > div.topbar-ctxmenu-body.clearfix.ps > div.topbar-application-item-inner-global.is-expanded > div.topbar-application-item-wrapper.topbar-application-item-global.ui-sortable > a:nth-child(1)',
    on: 'auto'
  },
  beforeShowPromise: openDrawer,
  title: 'Administration Office 365',
  buttons: buildButtons(tour, true, true)
},
{
  text: lorem,
  attachTo: {
    element: '#mdar_102517_0_mdar_102515_1 > div > div:nth-child(3)',
    on: 'auto'
  },
  beforeShowPromise: closeDrawer,
  title: 'Réseaux sociaux',
  buttons: buildButtons(tour, true, false)
}
]);
tour.start()