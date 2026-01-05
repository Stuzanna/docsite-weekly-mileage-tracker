import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Weekly Mileage Tracking',
    Svg: require('@site/static/img/weekly-mileage-chart.svg').default,
    description: (
      <>
        Get a clear overview of your weekly running mileage with visual charts and progress indicators.
        Track your training volume and ensure you&apos;re building mileage safely to avoid injury.
      </>
    ),
  },
  {
    title: 'Smart Activity Filtering',
    Svg: require('@site/static/img/activity-table.svg').default,
    description: (
      <>
        Easily filter through all your activities to find exactly what you need.
        Sort by distance, pace, date, or activity type to analyze your training patterns and performance trends.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
