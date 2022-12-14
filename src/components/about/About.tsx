import * as React from 'react';
import { GitHub } from 'react-feather';
import { useQuery } from 'react-query';
import { fetchVersion } from 'src/api/version';
import ContentHeader from 'src/components/ContentHeader';
import { connect } from 'src/components/StateProvider';
import { getClashAPIConfig } from 'src/store/app';
import { ClashAPIConfig } from 'src/types';

import s from './About.module.scss';

type Props = { apiConfig: ClashAPIConfig };

function Version({
  name,
  link,
  version,
}: {
  name: string;
  link: string;
  version: string;
}) {
  return (
    <div className={s.root}>
      <h2>{name}</h2>
      <p>
        <span>Version </span>
        <span className={s.mono}>{version}</span>
      </p>
      <p>
        <a
          className={s.link}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHub size={20} />
          <span>Source</span>
        </a>
      </p>
    </div>
  );
}

function AboutImpl(props: Props) {
  const { data: version } = useQuery(['/version', props.apiConfig], () =>
    fetchVersion('/version', props.apiConfig)
  );
  return (
    <>
      <ContentHeader title='About' />
      {version && version.version ? (
        <Version
          name={version.meta?'Clash.Meta':'Clash'}
          version={version.version}
          link='https://github.com/metacubex/clash.meta'
        />
      ) : null}
      <Version
        name='Yacd'
        version={__VERSION__}
        link='https://github.com/metacubex/yacd'
      />
    </>
  );
}

const mapState = (s) => ({
  apiConfig: getClashAPIConfig(s),
});

export const About = connect(mapState)(AboutImpl);
