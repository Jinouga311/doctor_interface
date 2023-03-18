import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowRightIcon } from './ArrowRightIcon';
import { AwardIcon } from './AwardIcon';
import { BriefcaseIcon } from './BriefcaseIcon';
import { CodeIcon } from './CodeIcon';
import { CodepenIcon } from './CodepenIcon';
import { CodesandboxIcon } from './CodesandboxIcon';
import { GitBranchIcon } from './GitBranchIcon';
import { Group16Icon } from './Group16Icon';
import { Group16Icon2 } from './Group16Icon2';
import classes from './PageConnexion.module.css';

interface Props {
  className?: string;
}
/* @figmaId 796:1150 */
export const PageConnexion: FC<Props> = memo(function PageConnexion(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
      <div className={classes.text}>Se déconnecter</div>
      <div className={classes.text2}>Nous contacter</div>
      <div className={classes.capture_d_ACran_20221115_A_163}></div>
      <div className={classes.frame}>
        <div className={classes.politiqueRelativeAuxCookies}>Politique relative aux cookies</div>
        <div className={classes.macBookPro1}>
          <div className={classes.politiqueRelativeAuxCookies2}>Politique relative aux cookies</div>
          <div className={classes.group16}>
            <Group16Icon className={classes.icon} />
          </div>
        </div>
      </div>
      <div className={classes.macBookPro12}>
        <div className={classes.politiqueRelativeAuxCookies3}>Politique relative aux cookies</div>
        <div className={classes.group162}>
          <Group16Icon2 className={classes.icon2} />
        </div>
      </div>
      <div className={classes.frame2605}>
        <div className={classes.frame2604}>
          <div className={classes.frame2602}>
            <div className={classes.frame2600}>
              <div className={classes.frame2599}>
                <div className={classes.briefcase}>
                  <BriefcaseIcon className={classes.icon3} />
                </div>
                <div className={classes.planning}>Planning</div>
              </div>
              <div className={classes.seasonedSoftwareEngineersCoder}>
                Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
              </div>
            </div>
          </div>
          <div className={classes.frame2603}>
            <div className={classes.frame26002}>
              <div className={classes.frame25992}>
                <div className={classes.award}>
                  <AwardIcon className={classes.icon4} />
                </div>
                <div className={classes.mesDocuments}>Mes documents</div>
              </div>
              <div className={classes.seasonedSoftwareEngineersCoder2}>
                Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
              </div>
            </div>
          </div>
          <div className={classes.frame2601}>
            <div className={classes.frame26003}>
              <div className={classes.frame25993}>
                <div className={classes.codesandbox}>
                  <CodesandboxIcon className={classes.icon5} />
                </div>
                <div className={classes.listesDesPatients}>Listes des patients</div>
              </div>
              <div className={classes.seasonedSoftwareEngineersCoder3}>
                Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame26032}>
          <div className={classes.frame26012}>
            <div className={classes.frame26004}>
              <div className={classes.frame25994}>
                <div className={classes.code}>
                  <CodeIcon className={classes.icon6} />
                </div>
                <div className={classes.valeur1}>Valeur1</div>
              </div>
              <div className={classes.seasonedSoftwareEngineersCoder4}>
                Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
              </div>
            </div>
          </div>
          <div className={classes.frame26022}>
            <div className={classes.frame26005}>
              <div className={classes.frame25995}>
                <div className={classes.gitBranch}>
                  <GitBranchIcon className={classes.icon7} />
                </div>
                <div className={classes.test1}>Test 1</div>
              </div>
              <div className={classes.frame2664}>
                <div className={classes.frame2662}>
                  <div className={classes.seasonedSoftwareEngineersCoder5}>
                    Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
                  </div>
                </div>
                <div className={classes.frame2663}>
                  <div className={classes.viewDesigners}>view designers</div>
                  <div className={classes.arrowRight}>
                    <ArrowRightIcon className={classes.icon8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame26033}>
            <div className={classes.frame26006}>
              <div className={classes.frame25996}>
                <div className={classes.codepen}>
                  <CodepenIcon className={classes.icon9} />
                </div>
                <div className={classes.monCompte}>Mon compte</div>
              </div>
              <div className={classes.seasonedSoftwareEngineersCoder6}>
                Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.image4}></div>
      <div className={classes.line7}></div>
      <div className={classes.line8}></div>
    </div>
  );
});
