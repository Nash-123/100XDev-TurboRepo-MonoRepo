
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";


export default function Page(): JSX.Element {
  return (<div>
    <Button appName="docs" className={styles.button}>Hi There</Button>
  </div>);
}
