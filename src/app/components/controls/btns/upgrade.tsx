interface Props {
  upgrade: any;
}

function handleClick(upgrade: any) {
  if (state.coins.value > upgrade.price) {
    upgrade.buy();
  } else {
    console.log('not enough coins')
  }
}
class UpgradeButton {
  render(props: Props) {
    return (
      <button onclick={handleClick(props.upgrade)} class="btn-upgrade">
        {props.upgrade.name}
        $ {props.upgrade.price}
      </button>
    )
  }
}

export default UpgradeButton;
