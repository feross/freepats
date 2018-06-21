FreePats - a set of sound fonts for use in audio synths.
Copyright (C) 2004 Free Software Foundation

This patch set is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This patch set is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

As a special exception, if you create a composition which uses
these patches, and mix these patches or unaltered portions of
these patches into the composition, these patches do not by
themselves cause the resulting composition to be covered by the
GNU General Public License. This exception does not however
invalidate any other reasons why the document might be covered
by the GNU General Public License. If you modify these patches,
you may extend this exception to your version of the patches,
but you are not obligated to do so. If you do not wish to do so,
delete this exception statement from your version.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the
Free Software Foundation, Inc.,
59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

----------------------------------------------------------------------

FreePats is a project to create a free and open set of GUS compatible
patches that can be used with softsynths such as Timidity and WildMidi.
For more information please visit http://freepats.opensrc.org or join
the mailing-list at "user at freepats dot opensrc dot org".

Eric A. Welsh uploaded an initial set of unencumbered patch files on
the 11th March 2004. See the missing pat list below and feel free to
contribute any GUS patches OR free and open wav files that can be
turned into patches or SoundFonts.

20060218

Walt@w-gregg.juneau.ak.us (Walt Gregg) uploaded patches to fill out drumset
0 and a ridiculously commented 'full.cfg' to take advantage of them.  Like
'crude.cfg' it uses substitute instruments to fill out missing patches:

  035_Kick_1.pat
  036_Kick_2.pat
  039_Clap_Hand.pat
  041_Tom_Low_2.pat
  043_Tom_Low_1.pat
  045_Tom_Mid_2.pat
  047_Tom_Mid_1.pat
  048_Tom_High_2.pat
  050_Tom_High_1.pat
  053_Cymbal_Ride_Bell.pat
  062_Conga_High_1_Mute.pat
  069_Cabasa.pat
  075_Claves.pat
  078_Cuica_1_Mute.pat
  079_Cuica_2_Open.pat

20040611

We finally have a license !!! The GPL with an extra clause. It may
not suit everyone so feel free to comment on the Wiki at...
http://alsa.opensrc.org/index.php?page=FreePats

20040320

Added "crude.cfg" which is an alternate config file that attempts to 
match some of the currently available pats to those that are still 
missing. It makes the current freepat set somewhat more usable until
we get to a point where all, or nearly all, pats are included.

Here is an example of an associated text file that can be included
for each freepat when the mkcfg.sh.txt script creates freepats.cfg.
As an example, the pat file below has an associated text file...

 freepats/Tone_000/000_Acoustic_Grand_Piano.pat
 freepats/Tone_000/000_Acoustic_Grand_Piano.txt

with the contents outlined below and if you check freepats.cfg you
will notice the first line below is appended in the cfg file.
----
amp=120 pan=center

The very first line of any associated *.txt file will be appended
to the auto-generated freepats.cfg file by the mkcfg.sh.txt script.

The rest of the file can be used for any purpose whatsoever, like
misc notes, a history of how the pat was created and/or changes to
this particular pat.
----

20040319

Changes to instruments noted below;

acpiano         relooped
synpiano        relooped
clavinet        all new, samples from Thomas Korte
celeste         all new samples to replace Gravis samples
tubebell        new sample to replace Gravis samples
church          new low samples
timpani         redid the declipping
marcato         swapped out a Gravis sample (2nd sample) with a non-Gravis one
trumpet         all new samples
trombone        all new samples
tuba            all new samples
flute           swapped out a Gravis sample (highest) with a non-Gravis one
ocarina         relooped + retuned low samples, lessened LFO vibrato
sitar           new samples to replace Gravis samples
steeldrm        replaced a sample with an ancestral sample (same sample but
                higher quality), thanks to Rodrigo Nuno Bragan
highq           replaced Gravis sample with non-Gravis one

-----------------------------------------------------------
                       MISSING PATCHES
-----------------------------------------------------------

Tone Bank 000:

003_Honky_Tonk_Piano.pat
010_Music_Box.pat
011_Vibraphone.pat
012_Marimba.pat
017_Percussive_Organ.pat
018_Rock_Organ.pat
020_Reed_Organ.pat
022_Harmonica.pat
031_Guitar_Harmonics.pat
039_Synth_Bass_2.pat
043_Contrabass.pat
041_Viola.pat
049_String_Ensemble_2_Slow.pat
050_Synth_Strings_1.pat
051_Synth_Strings_2.pat
052_Choir_Aahs.pat
054_Synth_Voice.pat
055_Orchestra_Hit.pat
062_Synth_Brass_1.pat
063_Synth_Brass_2.pat
077_Shakuhachi.pat
078_Whistle.pat
081_Saw_Wave.pat
082_Calliope.pat
083_Chiff_Lead.pat
085_Voice_Lead.pat
086_Lead_Fifth.pat
087_Bass_Lead.pat
089_Warm_Pad.pat
090_Polysynth.pat
091_Choir_Pad.pat
092_Bowed_Pad.pat
093_Metal_Pad.pat
096_Rain--Aurora.pat
097_Soundtrack.pat
099_Atmosphere.pat
100_Brightness.pat
103_Sci-Fi--Startrak.pat
105_Banjo.pat
106_Shamisen.pat
107_Koto.pat
108_Kalimba.pat
109_Bagpipe.pat
110_Fiddle.pat
111_Shanai.pat
112_Tinkle_Bells--Carillon.pat
113_Agogo.pat
116_Taiko.pat
117_Melodic_Tom.pat
118_Synth_Tom.pat
119_Reverse_Cymbal.pat
121_Breath_Noise.pat
123_Bird_Tweet.pat
124_Telephone_Ring.pat
126_Applause.pat
127_Pistol.pat

Drum Bank 000:

028_Slap.pat
029_Scratch_1_Push.pat
030_Scratch_2_Pull.pat

083_Jingle_Bell.pat
085_Castanet.pat
086_Surdo_1_Mute.pat
087_Surdo_2_Open.pat
